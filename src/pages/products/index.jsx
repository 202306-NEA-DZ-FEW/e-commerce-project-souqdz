import ShoppingCard from "@/components/ShoppingCard/ShoppingCard"

import { useEffect, useState } from "react"

const AllProducts = () => {
  const [products, setProducts] = useState([])

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products))
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h1 className="text-3xl  text-center font-semibold py-2">All Products</h1>
      <div className="grid grid-cols-3 gap-6 mx-auto p-16 justify-center bg-slate-100">
        {products.map((product) => {
          return <ShoppingCard key={product.id} {...product} />
        })}
      </div>
    </div>
  )
}
export default AllProducts
