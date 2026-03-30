'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert("Login successful (Prototype)")
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

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
            Login
          </Button>

        </form>

        <p className="text-sm text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-orange-500"
          >
            Register
          </Link>
        </p>

      </div>

    </div>

  )
}