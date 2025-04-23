import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["dlouisefermin@gmail.com"],
      subject: "New Inquiry from Portfolio Site",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    if (data.error) {
      console.error("Resend API error:", data.error);
      return NextResponse.json({ success: false, error: data.error.message });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}
