import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic" // Ensure this route is always executed server-side

export async function POST(request: NextRequest) {
  try {
    const { email, feedback } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const WAITLIST_ID = 29604

    const upstreamRes = await fetch("https://api.getwaitlist.com/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ waitlist_id: WAITLIST_ID, email }),
    })

    const data = await upstreamRes.json()

    if (!upstreamRes.ok) {
      console.error("GetWaitlist API error", data)
      return NextResponse.json(data, { status: upstreamRes.status })
    }

    // Log the waitlist submission with feedback for your records
    console.log("Waitlist submission:", {
      email,
      feedback: feedback || "",
      timestamp: new Date().toISOString(),
      getwaitlist_response: data
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
