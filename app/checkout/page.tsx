"use client"

import { useCart } from "@/context/CartContext"

export default function CheckoutPage() {

  const { cart } = useCart()

  const total = cart.reduce((sum, ) => sum + item.price, 0)

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <p className="mb-4">
        Total Payment: <strong>Ksh {total}</strong>
      </p>

      <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
        Pay with M-Pesa
      </button>

    </div>

  )
}