import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function sanitize(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(name: string, email: string, subject: string, message: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#050505;font-family:'General Sans',system-ui,-apple-system,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#050505;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;background-color:#0a0a0a;border:1px solid rgba(16,185,129,0.2);border-bottom:none;border-radius:16px 16px 0 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="display:inline-block;background-color:rgba(16,185,129,0.15);border-radius:8px;padding:6px 10px;">
                      <span style="color:#10b981;font-size:14px;font-weight:700;">V</span>
                    </div>
                    <span style="margin-left:8px;color:#f0f0f0;font-size:18px;font-weight:700;vertical-align:middle;">Vaibhav<span style="color:#10b981;">.Labs</span></span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Green accent line -->
          <tr>
            <td style="height:2px;background:linear-gradient(90deg,#10b981,#34d399,#10b981);"></td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;background-color:#0a0a0a;border:1px solid rgba(16,185,129,0.2);border-top:none;border-bottom:none;">
              <h1 style="margin:0 0 8px;color:#10b981;font-size:22px;font-weight:700;">New Message Received</h1>
              <p style="margin:0 0 28px;color:#888888;font-size:14px;">Someone reached out through your portfolio contact form.</p>

              <!-- Info cards -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:16px;background-color:#141414;border:1px solid #1a1a1a;border-radius:12px;margin-bottom:12px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-bottom:12px;">
                          <span style="color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">From</span><br/>
                          <span style="color:#f0f0f0;font-size:15px;font-weight:600;">${sanitize(name)}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:12px;">
                          <span style="color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</span><br/>
                          <a href="mailto:${sanitize(email)}" style="color:#10b981;font-size:14px;text-decoration:none;">${sanitize(email)}</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Subject</span><br/>
                          <span style="color:#f0f0f0;font-size:14px;">${sanitize(subject)}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="padding:20px;background-color:#141414;border:1px solid #1a1a1a;border-radius:12px;">
                <p style="margin:0 0 8px;color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Message</p>
                <p style="margin:0;color:#f0f0f0;font-size:14px;line-height:1.7;white-space:pre-wrap;">${sanitize(message)}</p>
              </div>

              <!-- Reply button -->
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:28px;">
                <tr>
                  <td style="border-radius:8px;background-color:#10b981;">
                    <a href="mailto:${sanitize(email)}" style="display:inline-block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;">Reply to ${sanitize(name)}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#0a0a0a;border:1px solid rgba(16,185,129,0.2);border-top:none;border-radius:0 0 16px 16px;">
              <p style="margin:0;color:#555555;font-size:12px;text-align:center;">
                This email was sent from the contact form on your Vaibhav.Labs portfolio.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Vaibhav.Labs Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "vaimistry24@gmail.com",
      replyTo: email,
      subject: `[Vaibhav.Labs] ${subject}`,
      html: buildEmailHtml(name, email, subject, message),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
