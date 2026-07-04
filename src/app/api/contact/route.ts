import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "placeholder");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.log("Mock Email Sent:", { name, email, message });
      return NextResponse.json({ success: true, mock: true });
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["contact@example.com"], // Replace with your real email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
