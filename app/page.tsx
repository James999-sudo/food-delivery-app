'use client'

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User, Truck, LayoutDashboard } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">FoodExpress</h1>
        <div className="space-x-4">
          <Button variant="ghost">Login</Button>
          <Button className="rounded-2xl">Sign Up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center px-8 py-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold mb-4">
            Order Food Anytime, Anywhere
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Fast delivery, fresh meals, and seamless ordering experience.
          </p>
          <div className="flex gap-4">
            <Input placeholder="Enter your location..." className="rounded-2xl" />
            <Button className="rounded-2xl">Find Food</Button>
          </div>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Food"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
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
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} FoodExpress. All rights reserved.</p>
      </footer>
    </div>
  );
}
