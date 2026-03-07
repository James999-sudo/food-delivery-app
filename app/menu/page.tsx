'use client'

import { useState } from "react"
import FoodCard from "@/components/food/FoodCard"

const foods = [
    {
        id: 1,
        name: "Beef Burger",
        price: 850,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        category: "Burgers"
    },
    {
        id: 2,
        name: "Chicken Wings",
        price: 750,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710",
        category: "Chicken"
    },
    {
        id: 3,
        name: "Pepperoni Pizza",
        price: 1200,
        image: "https://images.unsplash.com/photo-1548365328-9f547fb0953c",
        category: "Pizza"
    }
]

export default function MenuPage() {
    const [category, setCategory] = useState("All")
    const filteredFoods =
        category === "All"
            ? foods
            : foods.filter(food => food.category === category)
    return (
        <div className="p-10">

            <h1 className="text-3xl font-bold mb-8">
                Our Menu
            </h1>

            {/* CATEGORY FILTERS */}
            <div className="flex gap-4 mb-8">
                {["All", "Burgers", "Pizza", "Chicken"].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className="px-4 py-2 border rounded-full hover:bg-orange-500 hover:text-white"
                    ></button>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">

                {filteredFoods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                ))}

            </div>

        </div>
    )
}