'use client'

import jwt from "jsonwebtoken"

export function verifyToken(req: Request) {
    const authHeader = req.headers.get("authorization")

    if (!authHeader) {
        throw new Error("No token")
    }

    const token = authHeader.split(" ")[1]

    return jwt.verify(token, "secretkey") as {
        id: number
        email: string
    }
}