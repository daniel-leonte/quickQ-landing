import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, feedback } = body

    // Simulate processing
    console.log("Waitlist submission:", { email, feedback, timestamp: new Date().toISOString() })

    // In a real app, you'd save this to a database
    // await saveToDatabase({ email, feedback })

    return NextResponse.json({
      success: true,
      message: "Successfully joined waitlist!",
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to join waitlist" }, { status: 500 })
  }
}
