"use client"

import { createContext, useContext, useState } from "react"

type CartItem = {
  name: string
  price: number
  image: string
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (name: string) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(item: CartItem) {
    setCart([...cart, item])
  }

  function removeFromCart(name: string) {
    setCart(cart.filter((item) => item.name !== name))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used inside CartProvider")
  }

  return context
}