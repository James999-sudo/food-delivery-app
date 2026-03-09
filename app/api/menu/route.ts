export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Beef Burger",
      price: 850,
      image: "/burger.jpg",
      category: "Burgers"
    }
  ])
}