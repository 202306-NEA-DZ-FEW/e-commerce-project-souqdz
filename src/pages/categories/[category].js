import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ShoppingCard from "@/components/ShoppingCard/ShoppingCard"

async function fetchCategories() {
  const url = "https://fakestoreapi.com/products/categories"
  const options = {
    headers: {
      accept: "application/json",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

async function fetchProductsByCategory(category) {
  const url = `https://fakestoreapi.com/products/category/${category}`
  const options = {
    headers: {
      accept: "application/json",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

export default function CategoryPage() {
  const router = useRouter()
  const { category } = router.query
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (category) {
      fetchCategories().then((data) => {
        if (data && data.length > 0) {
          // Find the category name that matches the category index
          if (category) {
            setCategories([category])
            fetchProductsByCategory(category).then((productsData) => {
              if (productsData) {
                setProducts(productsData)
              }
            })
          }

          console.log(category)
        }
      })
    }
  }, [category])

  return (
    <div className="bg-pale-thing">
      <div className="py-10">
        <div style={{ textAlign: "center" }}>
          <h1 className="text-4xl font-bold text-brown-700">
            {categories} section
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-8 ml-24 mr-24 my-10">
          {products.map((product) => (
            <ShoppingCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
