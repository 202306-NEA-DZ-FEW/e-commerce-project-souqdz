import { useEffect, useState } from "react"
import StarRating from "@/components/Rating/StarRating"
import Hero from "@/components/Hero/Hero"
import ShoppingCard from "@/components/ShoppingCard/ShoppingCard"
import Link from "next/link"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <>
      <Hero />

      <h1
        className="text-4xl font-bold mb-4 text-text-brown flex justify-center items-center"
        style={{ fontFamily: "Mooli" }}
      >
        Products List
      </h1>
      <div className="border-b border-gold-g mb-6"></div>
      <div className="grid grid-cols-3 gap-6 ml-24 mr-24 my-10">
        {products.map((product) => (
          <ShoppingCard key={product.id} {...product} />
        ))}
      </div>

      <div className="flex justify-center my-6  ">
        <Link href="/products">
          <button className="btn bg-buttongold text-brown-text-brown px-4 py-2 rounded-full hover:bg-buttongoldhov mb-4">
            see more products
          </button>
        </Link>
      </div>
    </>
  )
}
