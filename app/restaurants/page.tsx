"use client"

import FoodCard from "@/components/food/FoodCard"

const foods = [
  {
    name: "Beef Burger",
    price: 850,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    name: "Pepperoni Pizza",
    price: 1200,
    image: "https://images.unsplash.com/photo-1548365328-9f547fb0953c"
  },
  {
    name: "Fried Chicken",
    price: 950,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710"
  }
]

export default function Restaurants() {
  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Restaurant Menu
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {foods.map((food, index) => (
          <FoodCard key={index} food={food} />
        ))}
      </div>

    </div>

  )
}