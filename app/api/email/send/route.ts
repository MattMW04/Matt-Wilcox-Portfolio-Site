import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Ensure environment variables
if (!process.env.RESEND_API_KEY || !process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error('Missing environment variables. Please check your .env file. or contact the administrator.');
}

// Redis client setup
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Ratelimit instances to prevent spam of emails 
const ipLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.fixedWindow(5, '1 h'), // 5 requests per IP per hour
});

const emailLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.fixedWindow(1, '1 h'), // 1 request per email per hour
});

const globalLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.fixedWindow(80, '24 h'), // 80 requests globally per day
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';

    try {
        const { name, email, subject, content } = await req.json();

        // Validate fields
        if (!name || !email || !subject || !content) {
            return NextResponse.json({ error: 'Please fill out all fields to send your email.', success: false }, { status: 400 });
        }

        // email format validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email format.', success: false }, { status: 400 });
        }

        // per ip rate limit - 5 requests per hour
        const ipResult = await ipLimiter.limit(`ratelimit:ip:${ip}`);
        if (!ipResult.success) {
            return NextResponse.json(
                { error: 'Too many requests from this location. Please try again later.', success: false },
                { status: 429 }
            );
        }

        // 2️per email rate limit - 1 request per hour
        const emailResult = await emailLimiter.limit(`ratelimit:email:${email}`);
        if (!emailResult.success) {
            return NextResponse.json(
                { error: 'You can only send 1 message per hour from this email.', success: false },
                { status: 429 }
            );
        }

        // global rate limit - 80 requests per day
        const globalResult = await globalLimiter.limit('ratelimit:global');
        if (!globalResult.success) {
            return NextResponse.json(
                { error: 'Global message limit reached. Please try again tomorrow.', success: false },
                { status: 429 }
            );
        }

        // Build message
        const message = {
            from: 'Matthew Wilcox Portfolio <>', // TODO: verify domain and place here within <> tags
            to: 'matt.wilcox24@gmail.com',
            subject: `New message from ${name}: ${subject}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${content}</p>
            `,
        };

        // Send email
        await resend.emails.send(message);

        return NextResponse.json({ message: 'Email sent successfully!', success: true }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email. Please try again later.', success: false }, { status: 500 });
    }
}