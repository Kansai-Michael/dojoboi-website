import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "studio@dojoboi.au";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, dojo, message } = body;

  if (!name || !email || !dojo || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Dojoboi Website <noreply@dojoboi.au>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name} — ${dojo}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #0a0a0a;">
          <div style="font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #c8102e; margin-bottom: 16px;">
            New website enquiry
          </div>
          <h1 style="font-size: 28px; font-weight: 800; letter-spacing: -0.02em; margin: 0 0 24px;">
            ${name}<br>
            <span style="font-style: italic; font-weight: 400; color: #555;">${dojo}</span>
          </h1>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #999; padding: 12px 0; border-bottom: 1px solid #eee; width: 120px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #c8102e;">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #999; padding: 12px 0; border-bottom: 1px solid #eee;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #999; padding: 12px 0; border-bottom: 1px solid #eee;">Dojo</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${dojo}</td>
            </tr>
          </table>
          <div style="font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #999; margin-bottom: 8px;">Message</div>
          <div style="background: #f5f5f5; padding: 20px; line-height: 1.65; white-space: pre-wrap;">${message}</div>
          <div style="margin-top: 32px; font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.15em; color: #ccc; text-transform: uppercase;">
            Sent via dojoboi.au contact form
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}