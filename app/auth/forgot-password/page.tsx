'use client'

import { useState } from "react"

export default function ForgotPasswordPage(){

  const [email,setEmail] = useState("")

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault()
    alert("Password reset link sent (prototype)")
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-xl font-bold mb-6 text-center">
          Reset Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-3 rounded-lg"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg"
          >
            Send Reset Link
          </button>

        </form>

      </div>

    </div>
  )
}