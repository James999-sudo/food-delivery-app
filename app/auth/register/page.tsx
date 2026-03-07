'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RegisterPage() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleRegister(e: any) {
    e.preventDefault()
    alert("Account created successfully! (Prototype)")
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">

          <Input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="w-full">
            Register
          </Button>

        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-orange-500"
          >
            Login
          </Link>
        </p>

      </div>

    </div>

  )
}