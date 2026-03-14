export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Beef Burger",
      price: 850,
      category: "Burgers",
      image: "/burger.jpg"
    },
    {
      id: 2,
      name: "Chicken Pizza",
      price: 1200,
      category: "Pizza",
      image: "/pizza.jpg"
    }
  ])
}