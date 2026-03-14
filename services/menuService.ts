export async function getMenu() {
  const res = await fetch("/api/menu")

  if (!res.ok) {
    throw new Error("Failed to fetch menu")
  }

  return res.json()
}