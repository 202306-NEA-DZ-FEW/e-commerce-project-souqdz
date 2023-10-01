import StarRating from "../Rating/StarRating"
import { useState } from "react"
import Link from "next/link"
import styles from "../../styles/ShoppingCard.module.css"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/util/firebase"

export default function ShoppingCard({ id, title, image, price, rating }) {
  const [product, setProduct] = useState()
  const itemsCollectionRef = collection(db, "items")

  const addProduct = async (e) => {
    e.preventDefault()

    // setProduct(productData)
    await addDoc(itemsCollectionRef, {
      name: title,
      image: image,
      price: price,
      uid: id,
      quantity: 1,
    })
  }

  return (
    <Link href={`/products/${id}`}>
      <div
        className={`card w-90 bg-white glass border-gold-g ${styles.shoppingCard}`}
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
            {title.length > 25 ? `${title.slice(0, 25)}...` : title}
          </h2>
          <StarRating rating={rating.rate} />

          <div className="flex flex-wrap items-start justify-between ">
            <button
              onClick={addProduct}
              className="btn bg-buttongold text-brown-text-brown px-4 py-2 hover:bg-buttongoldhov border border-brown-100 btn-xs sm:btn-sm md:btn-sm lg:btn-sm"
            >
              add to cart
            </button>

            <p className="font-bold text-xl">{price}$</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
