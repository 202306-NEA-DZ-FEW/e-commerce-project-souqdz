import Image from "next/image"
import { useEffect, useState } from "react"
import StarRating from "@/components/Rating/StarRating"
export default function Home() {
  const [products, setProducts] = useState([])
  const [Sproducts, setSProducts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  // function fetchingSlider (){
  //   fetch('https://fakestoreapi.com/products?limit=5')
  //   .then(res => res.json())
  //   .then(data => setSProducts(data))
  //   .catch(error => console.error('Error fetching data:', error));
  //  }
  useEffect(() => {
    // fetchingSlider ()
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex(prevIndex => (prevIndex + 1) % products.length);
  //     }, 2000);

  //     return () => clearInterval(interval);
  //   }, [Sproducts]);
  // console.log(products);

  return (
    <>
      {/* <div className="w-64 carousel rounded-box mt-2">
        {Sproducts.map((product, index) => (
          <div key={index} className={`carousel-item w-full ${index === currentIndex ? 'block' : 'hidden'}`}>
            <img src={product.image} className="w-full" alt={product.title} />
          </div>
        ))}
      </div> */}
      <h1 className="text-2xl font-bold mb-4 text-brown-text-brown">
        Products List
      </h1>
      <div className="border-b border-brown-gold-g mb-6"></div>

      <div className="grid grid-cols-3 gap-6 ml-16 mr-16">
        {products.map((product) => (
          <div className="card w-90  glass   " key={product.id}>
            <figure>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "80%", height: "250px" }}
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-brown-text-brown mb-2 ">
                {product.title.length > 25
                  ? `${product.title.slice(0, 25)}...`
                  : product.title}
              </h2>
              <StarRating rating={product.rating.rate} />

              <div className=" flex flex-wrap items-start gap-16 ">
                <button className="btn btn-primary bg-brown-buttongold text-brown-text-brown px-4 py-2 hover:bg-brown-buttongoldhov  border border-brown-100  btn-xs sm:btn-sm md:btn-sm lg:btn-sm">
                  add to cart
                </button>
                <p className="font-bold text-xl">{product.price}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
