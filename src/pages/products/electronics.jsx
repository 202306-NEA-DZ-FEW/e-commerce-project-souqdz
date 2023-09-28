import React from "react"
import Link from "next/link"
import StarRating from "@/components/Rating/StarRating"
import Card from "@/components/ShoppingCard/ShoppingCard"

const buttonStyle = {
  backgroundColor: "#BC9B7F",
  color: "white",
  fontWeight: "bold",
  borderRadius: "5px",
  padding: "10px 20px",
  marginLeft: "1rem",
  marginRight: "1rem",
}

export default function electronics({ electronicsData }) {
  console.log(electronicsData.results)
  return (
    <>
      <div className="bg-pale-thing">
        <Link href={`/products/electronics`} target="_BLANK">
          <button style={buttonStyle}>01</button>
        </Link>
        <Link href={`/products/men's%20clothing`} target="_BLANK">
          <button style={buttonStyle}>02</button>
        </Link>
        <Link href={`/products/women's%20clothing`} target="_BLANK">
          <button style={buttonStyle}>03</button>
        </Link>

        <div className="py-10">
          <div style={{ textAlign: "center" }}>
            <h1 className="text-4xl font-bold text-brown-700">
              electronics section
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-6 ml-16 mr-16 my-10">
            {electronicsData.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const url = "https://fakestoreapi.com/products/category/electronics"
  const options = {
    headers: {
      accept: "application/json",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()

  return {
    props: {
      electronicsData: data,
    },
  }
}
