import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
interface User {
  id: number
  email: string
  password: string
}

const users: User[] = []

export async function POST(req: Request) {

  const { email, password } = await req.json()

  const user = users.find((u) => u.email === email)

  if (!user) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    )
  }

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    )
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    "secretkey",
    { expiresIn: "7d" }
  )

  return NextResponse.json({
    message: "Login successful",
    token
  })
}