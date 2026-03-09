'use client'

import { useCart } from "@/context/CartContext"

export default function CartPage() {

  const { cart, increaseQty, decreaseQty } = useCart()

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  )

  return (

    <div className="p-10 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Your Cart
      </h1>

      {cart.length === 0 && (
        <p className="text-gray-500">
          Your cart is empty
        </p>
      )}

      <div className="space-y-6">

        {cart.map((item: any) => (

          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow rounded-xl p-4"
          >

            <div>

              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-gray-500">
                Ksh {item.price}
              </p>

            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                +
              </button>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-10 border-t pt-6">

        <h2 className="text-2xl font-bold">
          Total: Ksh {total}
        </h2>

      </div>

    </div>
  )
}