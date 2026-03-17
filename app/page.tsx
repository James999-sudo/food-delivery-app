'use client'
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User, Truck, LayoutDashboard } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import CategoryFilters from "@/components/food/CategoryFilter";
import { useCart } from "@/context/CartContext"
import FoodCard from "@/components/food/FoodCard";
import { addToCartAPI } from "@/services/cartService";

export default function HomePage() {
  const handleAddToCart = async (food: any) => {
    const token = localStorage.getItem("token")
    const item = { id: food.id, name: food.name, price: food.price }
    addToCart(item)
    if (token) {
      await addToCartAPI(item, token)
    }
  }

  const { cart } = useCart()

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price,
    0
  )

  const { addToCart, increaseQty, decreaseQty } = useCart()

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
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />


      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">

        <div>
          <h1 className="text-5xl font-bold mb-6">
            Delicious food delivered to your door
          </h1>


          <div className="flex gap-4">
            <input
              className="px-4 py-3 border rounded-xl w-full"
              placeholder="Enter your delivery address"
            />

            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl">
              Find Food
            </button>
          </div>
        </div>

        <CategoryFilters />

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          className="rounded-2xl shadow-xl"
        />

      </section>

      {/* Role Selection Section */}
      <section className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Platform Access</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* User Card */}
          <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition">
            <CardContent className="p-6 text-center space-y-4">
              <User size={40} className="mx-auto" />
              <h4 className="text-xl font-semibold">Users</h4>
              <p className="text-gray-600">
                Browse restaurants, order meals, and track deliveries live.
              </p>
              <Button className="rounded-2xl w-full">Explore</Button>
            </CardContent>
          </Card>

          {/* Admin Card */}
          <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition">
            <CardContent className="p-6 text-center space-y-4">
              <LayoutDashboard size={40} className="mx-auto" />
              <h4 className="text-xl font-semibold">Admins</h4>
              <p className="text-gray-600">
                Manage menu items, orders, users, and analytics in one place.
              </p>
              <Button className="rounded-2xl w-full">Admin Panel</Button>
            </CardContent>
          </Card>

          {/* Deliverer Card */}
          <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition">
            <CardContent className="p-6 text-center space-y-4">
              <Truck size={40} className="mx-auto" />
              <h4 className="text-xl font-semibold">Deliverers</h4>
              <p className="text-gray-600">
                Accept delivery requests and manage routes efficiently.
              </p>
              <Button className="rounded-2xl w-full">Start Delivering</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Meals */}
      <section className="px-8 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Popular Meals</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="rounded-2xl shadow-lg hover:shadow-2xl transition">
              <CardContent className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349"
                  alt="Meal"
                  className="rounded-2xl mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Delicious Burger</h4>
                <p className="text-gray-600 mb-2">Ksh 850</p>
                <Button className="rounded-2xl w-full flex items-center gap-2">
                  <ShoppingCart size={18} /> Add to Cart
                </Button>
                <button onClick={() => handleAddToCart({ id: "pizza-1", name: "Margherita", price: 12.99 })}>
                  Add Pizza
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* MENU / ORDER SECTION */}

      <section className="px-8 py-16 bg-gray-100">

        <h3 className="text-3xl font-bold text-center mb-12">
          Order Your Meal
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}

        </div>

        {/* CART SUMMARY */}

        <section className="px-8 py-12 bg-white">

          <h3 className="text-2xl font-bold mb-4">
            Cart Summary
          </h3>

          <p className="text-lg">
            Items in Cart: {cart.length}
          </p>

          <p className="text-xl font-semibold mt-2">
            Total: Ksh {total}
          </p>

        </section>

      </section>

      {/* FLOATING CART BAR */}

      <div className="fixed bottom-6 right-6 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">

        <ShoppingCart size={20} />

        <span>
          {cart.length} items
        </span>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} FoodExpress. All rights reserved.</p>
      </footer>
    </div>
  );
}                                                                                                                                                                     where should I apply the code in step 6 ? 
