'use client'

import { createContext, useContext, ReactNode, useState } from 'react'

export interface CartItem {
  id: string | number
  name: string
  price: number          // important: number, not string!
  quantity: number       // we'll always ensure it exists
  // image?: string
  // description?: string
  // etc.
}

// Define the shape of the context value
interface CartContextType {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  increaseQty: (id: string | number) => void
  decreaseQty: (id: string | number) => void
}

// We provide a default value only for TypeScript — never use it at runtime
const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (food: Omit<CartItem, 'quantity'>) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === food.id)

      if (existing) {
        return currentCart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentCart, { ...food, quantity: 1 }]
    })
  }

  const increaseQty = (id: string | number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQty = (id: string | number) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const value: CartContextType = {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Custom hook with safety check
export function useCart(): CartContextType {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}