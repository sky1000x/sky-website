import { NextRequest, NextResponse } from "next/server";

// TODO: Set RESEND_API_KEY in your Vercel environment variables.
// Sign up at https://resend.com and add the key to send real emails.
// If RESEND_API_KEY is not set, submissions are logged only (no email sent).

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, business, revenue, goal } = body;

    if (!name || !email || !business) {
      return NextResponse.json(
        { error: "Name, email, and business are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "hi@skyler1000x.com";

    // Send email via Resend if API key is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Skyler1000x Growth Audit <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email,
            subject: "New Skyler1000x Growth Audit Submission",
            html: `
              <h2>New Growth Audit Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Business / Context:</strong> ${business}</p>
              <p><strong>Revenue / Stage:</strong> ${revenue || "Not provided"}</p>
              <p><strong>Primary Goal:</strong> ${goal || "Not provided"}</p>
            `,
          }),
        });
        if (!res.ok) {
          console.error("Resend error:", await res.text());
        }
      } catch (emailErr) {
        console.error("Email send failed:", emailErr);
      }
    } else {
      // No email key configured — log submission for now
      console.log("Growth Audit submission (no RESEND_API_KEY set):", {
        name,
        email,
        business,
        revenue,
        goal,
      });
    }

    return NextResponse.json({
      success: true,
      message:
        "Your application has been received. Skyler will be in touch within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process your request." },
      { status: 500 }
    );
  }
}
