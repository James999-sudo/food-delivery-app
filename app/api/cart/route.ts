import { NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import { CartItem } from "../../../types/order"

const carts: Record<number, CartItem[]> = {}

export async function GET(req: Request) {
  try {
    const user = verifyToken(req)

    return NextResponse.json({
      cart: carts[user.id] || []
    })

  } catch {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const user = verifyToken(req)
    const item = await req.json()

    if (!carts[user.id]) {
      carts[user.id] = []
    }

    carts[user.id].push(item)

    return NextResponse.json({
      message: "Item added to cart",
      cart: carts[user.id]
    })

  } catch {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    )
  }
}