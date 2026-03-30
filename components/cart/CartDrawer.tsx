'use client'

import { useCart } from "@/context/CartContext"
import { CartItem } from "@/types/order"

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {

    const { cart, removeFromCart } = useCart()

    const total = cart.reduce(
        (sum: number, item: CartItem) => sum + item.price,
        0
    )

    return (

        <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >

            <div className="p-6 flex justify-between items-center border-b">
                <h2 className="text-xl font-bold">Your Cart</h2>
                <button onClick={onClose}>✕</button>
            </div>

            <div className="p-6 space-y-4">

                {cart.length === 0 && (
                    <p className="text-gray-500">Cart is empty</p>
                )}

                {cart.map((item: CartItem, index: number) => (

                    <div
                        key={index}
                        className="flex justify-between items-center"
                    >

                        <div>
                            <h3>{item.name}</h3>
                            <p className="text-gray-500">
                                Ksh {item.price}
                            </p>
                        </div>

                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500"
                        >
                            Remove
                        </button>

                    </div>

                ))}

            </div>

            <div className="p-6 border-t">

                <h3 className="font-bold mb-4">
                    Total: Ksh {total}
                </h3>

                <button
                    className="w-full bg-green-600 text-white py-3 rounded-lg"
                >
                    Checkout
                </button>
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={onClose}
                    />
                )}

            </div>

        </div>

    )
}