"use client"

import { useCart } from "@/context/CartContext"

export default function FoodCard({ food }: any) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      
      <img
        src={food.image}
        className="w-full h-40 object-cover rounded-xl"
      />

      <h3 className="text-lg font-bold mt-2">
        {food.name}
      </h3>

      <p className="text-gray-500">
        Ksh {food.price}
      </p>

      <button
        onClick={() => addToCart(food)}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-3 w-full"
      >
        Add to Cart
      </button>

    </div>
  )
}