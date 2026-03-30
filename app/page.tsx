'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Truck, LayoutDashboard, Search, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { useCart } from "@/context/CartContext"
import FoodCard from "@/components/food/FoodCard";
import { Food } from "@/types/food";
import { CartItem } from "@/types/order";
import { addToCartAPI } from "@/services/cartService";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = async (food: Food) => {
    const token = localStorage.getItem("token")
    const item = { id: food.id, name: food.name, price: food.price }
    addToCart(item)
    if (token) {
      await addToCartAPI(item, token)
    }
  }

  const { cart, addToCart } = useCart()

  const total = cart.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  )

  const foods = [
    {
      id: 1,
      name: "Beef Burger",
      price: 850,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      category: "Main Course",
      rating: 4.5
    },
    {
      id: 2,
      name: "Chicken Wings",
      price: 750,
      image: "https://images.unsplash.com/photo-1562967914-608f82629710",
      category: "Appetizer",
      rating: 4.2
    },
    {
      id: 3,
      name: "Pepperoni Pizza",
      price: 1200,
      image: "https://images.unsplash.com/photo-1548365328-9f547fb0953c",
      category: "Main Course",
      rating: 4.8
    }
  ]

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || food.category === selectedCategory)
  )
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-red-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10 items-center px-10 py-20"
      >
        <div>
          <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Delicious food delivered to your door
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            Order from your favorite restaurants and get it delivered fast.
          </p>

          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Search for food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition-colors">
              Find Food
            </Button>
          </div>

          <div className="flex gap-4">
            <select
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Main Course">Main Course</option>
              <option value="Appetizer">Appetizer</option>
            </select>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food delivery"
            width={800}
            height={400}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </motion.section>

      {/* Role Selection Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-8 py-16 bg-white"
      >
        <h3 className="text-3xl font-bold text-center mb-12">Platform Access</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* User Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition bg-linear-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6 text-center space-y-4">
                <User size={40} className="mx-auto text-blue-600" />
                <h4 className="text-xl font-semibold">Users</h4>
                <p className="text-gray-600">
                  Browse restaurants, order meals, and track deliveries live.
                </p>
                <Button className="rounded-2xl w-full bg-blue-500 hover:bg-blue-600">Explore</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Admin Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition bg-linear-to-br from-green-50 to-green-100">
              <CardContent className="p-6 text-center space-y-4">
                <LayoutDashboard size={40} className="mx-auto text-green-600" />
                <h4 className="text-xl font-semibold">Admins</h4>
                <p className="text-gray-600">
                  Manage menu items, orders, users, and analytics in one place.
                </p>
                <Button className="rounded-2xl w-full bg-green-500 hover:bg-green-600">Admin Panel</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Deliverer Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition bg-linear-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6 text-center space-y-4">
                <Truck size={40} className="mx-auto text-purple-600" />
                <h4 className="text-xl font-semibold">Deliverers</h4>
                <p className="text-gray-600">
                  Accept delivery requests and manage routes efficiently.
                </p>
                <Button className="rounded-2xl w-full bg-purple-500 hover:bg-purple-600">Start Delivering</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Meals */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-8 py-16"
      >
        <h3 className="text-3xl font-bold text-center mb-12">Popular Meals</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredFoods.slice(0, 3).map((food) => (
            <motion.div
              key={food.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition">
                <CardContent className="p-4">
                  <Image
                    src={food.image}
                    alt={food.name}
                    width={400}
                    height={300}
                    className="rounded-2xl mb-4"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold">{food.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{food.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">Ksh {food.price}</p>
                  <Button 
                    className="rounded-2xl w-full flex items-center gap-2 bg-orange-500 hover:bg-orange-600"
                    onClick={() => handleAddToCart(food)}
                  >
                    <ShoppingCart size={18} /> Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* MENU / ORDER SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-8 py-16 bg-gray-100"
      >
        <h3 className="text-3xl font-bold text-center mb-12">
          Order Your Meal
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        {/* CART SUMMARY */}
        {cart.length > 0 && (
          <motion.section 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="mt-12 px-8 py-8 bg-white rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">
              Cart Summary
            </h3>
            <p className="text-lg">
              Items in Cart: {cart.length}
            </p>
            <p className="text-xl font-semibold mt-2">
              Total: Ksh {total}
            </p>
            <Button className="mt-4 w-full bg-green-500 hover:bg-green-600">
              Proceed to Checkout
            </Button>
          </motion.section>
        )}
      </motion.section>

      {/* FLOATING CART BAR */}
      {cart.length > 0 && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-6 right-6 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 cursor-pointer hover:bg-orange-600 transition-colors"
        >
          <ShoppingCart size={20} />
          <span>
            {cart.length} items - Ksh {total}
          </span>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} FoodExpress. All rights reserved.</p>
      </footer>
    </div>
  );
} 
