import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function GET(req: Request) {

  const authHeader = req.headers.get("authorization")

  if (!authHeader) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    )
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, "secretkey")

    return NextResponse.json({
      user: decoded
    })

  } catch {
    return NextResponse.json(
      { message: "Invalid token" },
      { status: 401 }
    )
  }
}