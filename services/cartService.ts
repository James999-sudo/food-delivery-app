import { CartItem } from "@/types/order";

export async function addToCartAPI(item: Omit<CartItem, 'quantity'>, token: string) {
  const res = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(item)
  })

  return res.json()
}
