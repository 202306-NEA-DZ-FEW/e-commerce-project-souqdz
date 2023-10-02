import React from "react"

const StarRating = ({ rating }) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i} role="img" aria-label="star" className="star">
          &#11088;
        </span>,
      )
    } else {
      stars.push(
        <span key={i} role="img" aria-label="star" className="star">
          &#9734;
        </span>,
      )
    }
  }
  return <div className="star-rating">{stars}</div>
}

export default StarRating
