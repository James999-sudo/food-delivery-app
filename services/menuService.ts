import { fetchAPI } from "@/lib/api"

export async function getMenu() {
  return fetchAPI("/api/menu")
}