'use client'

import { ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CartDrawer from "@/components/cart/CartDrawer"

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">

      <Link href="/" className="text-2xl font-bold text-orange-500">
        FoodExpress
      </Link>

      <div className="hidden md:flex items-center gap-6">
        <Link href="/restaurants">Restaurants</Link>
        <Link href="/offers">Offers</Link>
        <Link href="/orders">Orders</Link>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost">
          <User size={20} />
        </Button>

        <Button
          className="flex items-center gap-2 rounded-full"
          onClick={() => setCartOpen(true)}
        >
          Cart
        </Button>
        <Link href="/auth/login">
          <Button variant="ghost">Login</Button>
        </Link>

        <Link href="/auth/register">
          <Button className="rounded-2xl">Sign Up</Button>
        </Link>
        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
        />
      </div>

    </nav>
  )
}