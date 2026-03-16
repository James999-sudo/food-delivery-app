import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

let users:any[] = [] // temporary storage

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
      id: Date.now(),
      name,
      email,
      password: hashedPassword
    }

    users.push(newUser)

    return NextResponse.json({
      message: "User created successfully"
    })

  } catch (error) {
    return NextResponse.json(
      { message: "Signup failed" },
      { status: 500 }
    )
  }
}