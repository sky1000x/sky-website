import { NextRequest, NextResponse } from "next/server";

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

    // In production, send to CRM / email service
    console.log("Audit request received:", { name, email, business, revenue, goal });

    return NextResponse.json({
      success: true,
      message: "Your audit request has been received. We'll be in touch within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process your request." },
      { status: 500 }
    );
  }
}
