const Filter = ({
  categories,
  onCategoryChange,
  selectedCategories,
  selectedRatings,
  onRatingChange,
  selectedPriceRange,
  onPriceRangeChange,
}) => {
  const allCategories = ["All", ...categories]

  // Define price ranges
  const priceRanges = [
    { label: "0 - 50$", value: "0-50" },
    { label: "50 - 100$", value: "50-100" },
    { label: "100 - 500$", value: "100-500" },
    { label: "Over 500$", value: "500+" },
  ]

  // Define rating options
  const ratingOptions = [1, 2, 3, 4, 5]

  return (
    <div className="text-center">
      {allCategories.map((category, index) => {
        const isActive = selectedCategories.includes(category)

        return (
          <div key={index}>
            <button
              className={`${
                isActive
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-1 m-2 rounded w-40`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          </div>
        )
      })}

      <div className="flex flex-col  items-start ">
        <label>Rating:</label>
        {ratingOptions.map((rating, index) => (
          <label className="flex items-center" key={index}>
            <input
              className="mx-2 rounded-full appearance-none w-4 h-4 border border-gray-300 checked:bg-blue-500 checked:border-transparent "
              type="checkbox"
              value={rating}
              checked={selectedRatings.includes(rating)}
              onChange={() => onRatingChange(rating)}
            />

            {Array.from({ length: rating }, (_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
          </label>
        ))}
      </div>

      <div className=" flex flex-col  items-start">
        <label>Price Range:</label>
        {priceRanges.map((range, index) => (
          <label className="flex items-center" key={index}>
            <input
              className="mx-2 rounded-full appearance-none w-4 h-4 border border-gray-300 checked:bg-blue-500 checked:border-transparent "
              type="checkbox"
              value={range.value}
              checked={selectedPriceRange.includes(range.value)}
              onChange={() => onPriceRangeChange(range.value)}
            />
            {range.label}
          </label>
        ))}
      </div>
    </div>
  )
}

export default Filter
