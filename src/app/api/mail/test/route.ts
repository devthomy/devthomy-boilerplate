import { EmailTemplate } from '@/components/email/EmailTemplate';
import { resend } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST() {
  try {

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || '', // Use environment variable
      to: [process.env.EMAIL_TO || ''], // Use environment variable
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}