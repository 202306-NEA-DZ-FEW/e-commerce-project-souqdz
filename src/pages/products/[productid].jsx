import Link from "next/link"
import React from "react"
import StarRating from "@/components/Rating/StarRating"

function splitTitleIntoLines(title) {
  const words = title.split(" ")
  const lines = []
  let currentLine = ""

  for (let i = 0; i < words.length; i++) {
    currentLine += words[i] + " "
    if ((i + 1) % 4 === 0 || i === words.length - 1) {
      lines.push(currentLine.trim())
      currentLine = ""
    }
  }

  return lines
}

export default function productPage({ productData }) {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gold-g flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-pale-thing shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={productData.image}
                  className="w-full relative z-10"
                  alt=""
                />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="relative text-xs uppercase mb-10 text-buttongold opacity-75 hover:opacity-100 inline-block leading-none text-2xl">
                {productData.category}
              </div>
              <div className="mb-10 text-text-brown">
                {splitTitleIntoLines(productData.title).map((line, index) => (
                  <h1 key={index} className="font-bold text-2xl mb-5">
                    {line}
                  </h1>
                ))}

                <div className="my-2">
                  <StarRating rating={productData.rating.rate} />
                </div>
                <p className="text-sm text-text-brown">
                  {productData.description}
                </p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    $
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {productData.price}
                  </span>
                </div>

                <div className="inline-block align-bottom">
                  <button className="bg-buttongold opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    <i className="mdi mdi-cart -ml-2 mr-2"></i> ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-20"></div>
          <div className="absolute bottom-3 left-3">
            <Link href="/">
              <button className="bg-buttongold opacity-100 hover:bg-buttongoldhov opacity-80 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold flex items-center">
                <i className="mdi mdi-cart -ml-2 mr-2"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
                <span className="ml-2">Back to shopping</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { productId } = context.query
  const url = `https://fakestoreapi.com/products/${productId}`

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()

  return {
    props: {
      productData: data,
    },
  }
}
