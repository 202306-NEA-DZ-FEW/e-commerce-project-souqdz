import StarRating from "../Rating/StarRating"

import Link from "next/link"
import styles from "../../styles/ShoppingCard.module.css"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/util/firebase"
import { useCart } from "@/util/context"

export default function ShoppingCard({ id, title, image, price, rating }) {
  const itemsCollectionRef = collection(db, "items")
  const { addItemToCart, itemCount } = useCart()

  const handleAddToCart = () => {
    const product = { id, title, image, price }
    console.log("Adding item to cart:", product)
    addItemToCart(product)
  }

  const addProduct = async (e) => {
    e.preventDefault()

    await addDoc(itemsCollectionRef, {
      name: title,
      image: image,
      price: price,
      uid: id,
      quantity: 1,
    })
    handleAddToCart()
  }

  return (
    <Link href={`/products/${id}`}>
      <div
        className={`card w-90 bg-white  border-gold-g ${styles.shoppingCard}`}
        style={{ minHeight: "450px" }}
        key={id}
      >
        <figure>
          <img
            src={image}
            alt={title}
            style={{ width: "60%", height: "250px", padding: "1rem" }}
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-text-brown mb-2 ">
            {title.length > 18 ? `${title.slice(0, 18)}...` : title}
          </h2>
          <div className="flex items-center justify-between mt-2.5 mb-1 mx-2  ">
            <StarRating rating={rating.rate} />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating.rate}
            </span>
          </div>
          <div className="flex flex-wrap items-start justify-between ">
            <button
              onClick={addProduct}
              className="btn bg-buttongold text-text-brown px-4 py-2 hover:bg-red-50 border  border-brown-100 btn-xs sm:btn-sm md:btn-sm lg:btn-sm"
            >
              add to cart
            </button>

            <p className="font-bold text-black text-xl">{price}$</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
