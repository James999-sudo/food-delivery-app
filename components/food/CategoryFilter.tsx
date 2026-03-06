'use client'

const categories = [
  "All",
  "Pizza",
  "Burgers",
  "Chicken",
  "African",
  "Drinks",
  "Desserts"
]

export default function CategoryFilters() {
  return (
    <div className="flex gap-4 overflow-x-auto px-10 py-6">

      {categories.map((cat) => (
        <button
          key={cat}
          className="px-5 py-2 bg-white border rounded-full shadow-sm hover:bg-orange-500 hover:text-white transition"
        >
          {cat}
        </button>
      ))}

    </div>
  )
}