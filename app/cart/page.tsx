'use client'

import { useCart } from "@/context/CartContext"

export default function CartPage() {

  const { cart, removeFromCart } = useCart()

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price,
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

        {cart.map((item: any, index: number) => (

          <div
            key={index}
            className="flex items-center justify-between bg-white shadow rounded-xl p-4"
          >

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div>

                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  Ksh {item.price}
                </p>

              </div>

            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>

          </div>

        ))}

      </div>

      {/* TOTAL PRICE */}

      <div className="mt-10 border-t pt-6">

        <h2 className="text-2xl font-bold">
          Total: Ksh {total}
        </h2>

        <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl">
          Proceed to Checkout
        </button>

      </div>

    </div>
  )
}