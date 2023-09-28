import Link from "next/link"
import { useEffect, useState } from "react"

const buttonStyle = {
  backgroundColor: "#BC9B7F",
  color: "white",
  fontWeight: "bold",
  borderRadius: "5px",
  padding: "10px 20px",
  marginLeft: "1rem",
  marginRight: "1rem",
}

export default function Home() {
  const [products, setProducts] = useState([])
  const [Sproducts, setSProducts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  function fetchingSlider() {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setSProducts(data))
      .catch((error) => console.error("Error fetching data:", error))
  }
  useEffect(() => {
    fetchingSlider()
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [Sproducts])
  console.log(products)

  return (
    <>
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-4 text-brown-text-brown">
          Single product links
        </h1>
        <Link href={`/products/1`}>
          <button style={buttonStyle}>01</button>
        </Link>
        <Link href={`/products/2`}>
          <button style={buttonStyle}>02</button>
        </Link>
        <Link href={`/products/3`}>
          <button style={buttonStyle}>03</button>
        </Link>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-bold mb-4 text-brown-text-brown">
          Single product links
        </h1>
        <Link href={`/products/electronics`} target="_BLANK">
          <button style={buttonStyle}>electro</button>
        </Link>
        <Link href={`/products/men's%20clothing`} target="_BLANK">
          <button style={buttonStyle}>men</button>
        </Link>
        <Link href={`/products/women's%20clothing`} target="_BLANK">
          <button style={buttonStyle}>women</button>
        </Link>
        <Link href={`/products/jewelery`} target="_BLANK">
          <button style={buttonStyle}>jewel</button>
        </Link>
      </div>
    </>
  )
}
