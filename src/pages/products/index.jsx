import Filter from "@/components/Filter/Filter"
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner"
import ShoppingCard from "@/components/ShoppingCard/ShoppingCard"
import { productsFetcher } from "@/util/API"

import { useEffect, useState } from "react"

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRatings, setSelectedRatings] = useState([])
  const [selectedPriceRange, setSelectedPriceRange] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  const fetchData = async () => {
    const data = await productsFetcher("products")

    setProducts(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
    setIsLoading(true)
  }, [])
  if (isLoading) {
    return <LoadingSpinner />
  }

  const categories = products
    .map((product) => product.category)
    .filter((value, index, self) => {
      return self.indexOf(value) === index
    })

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (category === "All") {
        // If "All" is selected, clear all other selections
        return []
      }
      if (prevSelectedCategories.includes(category)) {
        // If the category is already selected, remove it
        return prevSelectedCategories.filter((c) => c !== category)
      } else {
        return [...prevSelectedCategories, category]
      }
    })
  }

  const handleRatingChange = (rating) => {
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating]
    setSelectedRatings(updatedRatings)
  }

  const handlePriceRangeChange = (range) => {
    const updatedPriceRange = selectedPriceRange.includes(range)
      ? selectedPriceRange.filter((r) => r !== range)
      : [...selectedPriceRange, range]
    setSelectedPriceRange(updatedPriceRange)
  }
  const getPriceRange = (price) => {
    if (price >= 0 && price <= 50) return "0-50"
    if (price > 50 && price <= 100) return "50-100"
    if (price > 100 && price <= 500) return "100-500"
    return "500+"
  }

  const productsToDisplay = products.filter((product) => {
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    ) {
      return false
    }
    if (
      selectedRatings.length > 0 &&
      !selectedRatings.includes(Math.floor(product.rating.rate) + 1)
    ) {
      return false
    }
    if (
      selectedPriceRange.length > 0 &&
      !selectedPriceRange.includes(getPriceRange(product.price))
    ) {
      return false
    }

    return true
  })

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div
        className={` md:w-1/4  p-4  sm:block lg:sticky
         h-screen mt-8  rounded overflow-y-hidden   `}
      >
        <Filter
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          selectedRatings={selectedRatings}
          onRatingChange={handleRatingChange}
          selectedPriceRange={selectedPriceRange}
          onPriceRangeChange={handlePriceRangeChange}
          categories={categories}
        />
      </div>
      <div className="w-full block sm-m-16 md:m-0 sm:w-full md:w-3/4 lg:w-3/4 ml-0 ">
        <h1 className="text-3xl text-center text-text-brown font-semibold py-2">
          All Products
        </h1>
        <div className="h-[calc(100vh-132px)] overflow-y-auto">
          {productsToDisplay.length === 0 ? (
            <div className="grid place-content-center h-[100vh] text-xl text-red-500 font-bold ">
              No matches found
            </div>
          ) : (
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto sm:p-16 md:p-8 justify-center bg-slate-100 rounded  ">
              {productsToDisplay.map((product) => {
                return <ShoppingCard key={product.id} {...product} />
              })}
            </div>
          )}
        </div>
      </div>
      <div className="bg-black h-[200px]"></div>
    </div>
  )
}

export default AllProducts
