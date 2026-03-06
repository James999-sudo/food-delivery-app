"use client"

import { useCart } from "@/context/CartContext"

export default function CartPage() {

  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Your Cart
      </h1>

      {cart.length === 0 && (
        <p>Your cart is empty</p>
      )}

      {cart.map((item, index) => (

        <div
          key={index}
          className="flex justify-between items-center bg-white shadow p-4 mb-3 rounded-lg"
        >

          <div>
            <h3 className="font-bold">{item.name}</h3>
            <p>Ksh {item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.name)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>

        </div>

      ))}

      <h2 className="text-xl font-bold mt-6">
        Total: Ksh {total}
      </h2>

    </div>

  )
}