import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.fullName || !body.email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }
    const ticketNumber =
      "DMS27-" +
      Math.random().toString(36).substring(2, 8).toUpperCase();
    return NextResponse.json({
      success: true,
      ticketNumber,
      message: "RSVP recorded",
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
