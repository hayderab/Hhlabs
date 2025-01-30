import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import sgMail from '@sendgrid/mail';
import { ResponseError } from '@sendgrid/mail';

interface SendGridErrorBody {
  message: string;
  code: number;
}

// Validate environment variables
const validateEnvVariables = () => {
  const required = ['SENDGRID_API_KEY', 'TO_EMAIL'];
  const missing = required.filter(key => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
};

export async function POST(request: NextRequest) {
  try {
    validateEnvVariables();
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Initialize SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    // Setup email data
    const msg = {
      to: process.env.TO_EMAIL!,
      from: {
        email: process.env.TO_EMAIL!,
        name: 'HH Labs Contact Form'
      },
      replyTo: {
        email: email,
        name: name
      },
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await sgMail.send(msg);
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (error) {
      console.error('SendGrid Error:', error);
      if (error instanceof ResponseError && error.response?.body) {
        try {
          const errorBody = JSON.parse(error.response.body) as SendGridErrorBody;
          if (errorBody.code === 403) {
            return NextResponse.json(
              { 
                message: 'Email sending failed. Please verify your SendGrid sender email address.',
                details: 'The email address used to send emails must be verified in your SendGrid account.'
              },
              { status: 403 }
            );
          }
          return NextResponse.json(
            { message: `Email sending failed: ${errorBody.message}` },
            { status: 500 }
          );
        } catch (parseError) {
          console.error('Error parsing SendGrid error response:', parseError);
          return NextResponse.json(
            { message: 'Email sending failed' },
            { status: 500 }
          );
        }
      }
      throw error;
    }
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
