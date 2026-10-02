import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, area, pincode, zoneLabel, subZone, landmarks, responseTime, notes } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and contact number are required." },
        { status: 400 }
      );
    }

    const bookingId = `KK-${Math.floor(100000 + Math.random() * 900000)}`;
    const receivedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Server-side logging for the booking dispatch team
    console.log("=========================================");
    console.log(`[NEW BOOKING RECEIVED] ID: ${bookingId}`);
    console.log(`Time: ${receivedAt}`);
    console.log(`Customer: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log(`Area: ${area}${pincode ? ` (PIN: ${pincode})` : ""}`);
    if (zoneLabel || subZone) console.log(`Zone: ${[zoneLabel, subZone].filter(Boolean).join(" • ")}`);
    if (landmarks) console.log(`Landmarks: ${landmarks}`);
    if (responseTime) console.log(`Response SLA: ${responseTime}`);
    console.log(`Notes: ${notes || "None"}`);
    console.log("=========================================");

    return NextResponse.json({
      success: true,
      bookingId,
      receivedAt,
      message: "Booking request received successfully."
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process booking request." },
      { status: 500 }
    );
  }
}
