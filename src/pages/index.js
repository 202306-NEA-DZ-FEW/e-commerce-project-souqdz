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
      <Footer />
    </>
  )
}
