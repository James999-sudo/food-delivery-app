"use client"

import { useCart } from "@/context/CartContext"

const foods = [
  {
    id: 1,
    name: "Beef Burger",
    price: 850,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 2,
    name: "Chicken Wings",
    price: 750,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710"
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    price: 1200,
    image: "https://images.unsplash.com/photo-1548365328-9f547fb0953c"
  }
]

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