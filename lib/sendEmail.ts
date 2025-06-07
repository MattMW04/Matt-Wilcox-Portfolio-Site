interface SendEmailPayload {
    name: string;
    email: string;
    subject: string;
    content: string;
}

interface SendEmailResponse {
    success: boolean;
    error?: string;
    message?: string;
}

export async function sendEmail(payload: SendEmailPayload): Promise<SendEmailResponse> {
    try {
        const response = await fetch('/api/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        if (!response.ok) {
            return { success: false, error: data.error || 'Failed to send email.' };
        }

        //  Success true handling
        if (data.success) {
            return { success: true, message: data.message || 'Email sent successfully!' };
        }
        // handle edge case - response success but data.success is false for some reason
        return { success: false, error: data.error || 'Failed to send email.' };

    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'An unexpected error occurred while sending the email.' };
    }
}