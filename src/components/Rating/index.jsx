/*  Import tools and the Images*/

import React from 'react'
import greyStar from '../../assets/rate_star.svg'
import orangeStar from '../../assets/rate_star_active.svg'


/*  Component */

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="rating-container">
      {range.map((rangeElem) => (
        <img
          className="rating-container__stars"
          src={rating >= rangeElem ? orangeStar : greyStar}
          alt=""
          key={rangeElem.toString()}
        />
      ))}
    </div>
  )
}

export default Rating

