'use client'

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User, Truck, LayoutDashboard } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import CategoryFilters from "@/components/food/CategoryFilter";

export default function HomePage() {
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
