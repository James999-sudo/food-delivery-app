import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { phone, amount } = await req.json()

  // This is a placeholder for M-Pesa API call
  return NextResponse.json({
    message: "STK Push sent",
    phone,
    amount
  })
}