'use client'

import { useEffect, useState } from "react"
import FoodCard from "@/components/food/FoodCard"
import { Food } from "@/types/food"
import { getMenu } from "@/services/menuService"

export default function MenuPage() {
    const [category, setCategory] = useState("All")
    const [foods, setFoods] = useState<Food[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMenu = async () => {
            const menu = await getMenu()
            setFoods(menu)
            setLoading(false)
        }

        fetchMenu()
    }, [])

    const filteredFoods =
        category === "All"
            ? foods
            : foods.filter((food: Food) => food.category === category)
    return (
        <div className="p-10">

            <h1 className="text-3xl font-bold mb-8">
                Our Menu
            </h1>


            <div className="grid md:grid-cols-3 gap-8">

                {filteredFoods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                ))}

            </div>

        </div>
    )
}