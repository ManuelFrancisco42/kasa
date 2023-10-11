
/*  Import tools */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Arrow from '../../assets/forward_arrow.svg'


/*  Component */

function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    )
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    )
  }

  return (
    <div className="carousel">
      <div
        className="carousel__slider"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            className="carousel__slider__pictures"
            key={index}
            src={slide}
            alt=""
          />
        ))}
      </div>
      {slides.length > 1 && (
        <div className="carousel__commands">
          <button
            className="carousel__commands__buttons"
            onClick={previousSlide}
          >
            <img
              className="arrow arrow--backward"
              src={Arrow}
              alt="Précédent"
            />
          </button>
          <p className="carousel__commands__photocount">
            {currentSlide + 1}/{slides.length}
          </p>
          <button className="carousel__commands__buttons" onClick={nextSlide}>
            <img className="arrow" src={Arrow} alt="Suivant" />
          </button>
        </div>
      )}
    </div>
  )
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carousel
