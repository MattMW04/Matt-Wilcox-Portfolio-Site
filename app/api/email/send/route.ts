import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Ensure environment variables
if (!process.env.RESEND_API_KEY || !process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error('Missing environment variables. Please check your .env file. or contact the administrator.');
}
// redis and ratelimit setup to prevent spam emails from the same location
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.fixedWindow(5, '10 m') // 5 requests per 10 minutes per IP
});

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';

    const { success } = await ratelimit.limit(ip);

    if (!success) {
        return NextResponse.json({ error: 'Too many requests from this location. Please try again later.', success: false }, { status: 429 });
    }
    const { name, email, subject, content } = await req.json();

    if (!name || !email || !subject || !content) {
        return NextResponse.json({ error: 'Please fill out all fields to send your email.' }, { status: 400 });
    }


    const message = {
        from: 'Matthew Wilcox Portoflio <>', // From my verified sender // TODO: verify domain and place here within <> tags
        to: ' matt.wilcox24@gmail.com',
        subject: `New message from ${name}: ${subject}`,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${content}</p>
        `,
    }
    try {
        await resend.emails.send(message);
        return NextResponse.json({ message: 'Email sent successfully!', success: true }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email. Please try again later.', success: false }, { status: 500 });
    }
};