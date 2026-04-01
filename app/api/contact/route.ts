import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  company: z.string().max(100).optional(),
  message: z.string().min(10).max(2000),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: result.error.issues },
      { status: 422 }
    );
  }

  const { name, email, company, message } = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO ?? "hello@mezen.co";
  const fromEmail = process.env.CONTACT_EMAIL_FROM ?? "no-reply@mezen.co";

  if (!apiKey) {
    // Dev fallback: log to console
    console.log("Contact form submission (RESEND_API_KEY not set):", {
      name,
      email,
      company,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escHtml(name)}</p>
    <p><strong>Email:</strong> ${escHtml(email)}</p>
    ${company ? `<p><strong>Company:</strong> ${escHtml(company)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <blockquote style="border-left:3px solid #ccc;padding-left:1em;color:#444;">
      ${escHtml(message).replace(/\n/g, "<br>")}
    </blockquote>
  `;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `[Mezen] New enquiry from ${name}${company ? ` (${company})` : ""}`,
      html,
    }),
  });

  if (!resendRes.ok) {
    console.error("Resend error:", await resendRes.text());
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
