import Link from "next/link"
import StarRating from "../Rating/StarRating"

export default function ShoppingCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="card w-90 bg-white glass border-gold-g "
        style={{ minHeight: "450px" }}
        key={product.id}
      >
        <figure>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "60%", height: "250px", padding: "1rem" }}
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-text-brown mb-2 ">
            {product.title.length > 25
              ? `${product.title.slice(0, 25)}...`
              : product.title}
          </h2>
          <StarRating rating={product.rating.rate} />

          <div className="flex flex-wrap items-start gap-16 ">
            <button className="btn bg-buttongold text-brown-text-brown px-4 py-2 hover:bg-buttongoldhov border border-brown-100 btn-xs sm:btn-sm md:btn-sm lg:btn-sm">
              add to cart
            </button>
            <p className="font-bold text-xl">{product.price}$</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
