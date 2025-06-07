import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
    const { name, email, subject, content } = await req.json();

    if (!name || !email || !subject || !content) {
        return NextResponse.json({ error: 'Please fill out all fields to send your email.' }, { status: 400 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

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