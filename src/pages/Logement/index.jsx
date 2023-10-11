 

/* Import tools, data, and components*/

import React from 'react';

import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


// import { useParams, useNavigate } from 'react-router-dom';
import rentalList from '../../data/logements.json';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import Tags from '../../components/Tags';

 

/*  Component */
 
function Rental() {
  const { rentalId } = useParams()
    

  const rental = rentalList.find((item) => item.id === rentalId)

  // Use if Statement navigate to redirect to the page

  if (!rental) {
    return <Navigate to="/address-not-found" />
  }

  return (
    <section className="rental-page">
      {/* Render the image carousel */}
      <Carousel slides={rental.pictures} />

      <div className="rental-info-container">
        <div className="rental-info">
          <h1 className="rental-info__title">{rental.title}</h1>
          <p className="rental-info__location">{rental.location}</p>

          <div className="rental-info__tags">
            {/* Render tags component */}
            <Tags tag={rental.tags} />
          </div>
        </div>

        <div className="renter-info">
          <div className="renter-info__identity">
            <p className="renter-info__identity__name">{rental.host.name}</p>
            <img
              className="renter-info__identity__pic"
              src={rental.host.picture}
              alt=""
            />
          </div>

          {/* Render the rating component */}
          <Rating rating={rental.rating} />
        </div>
      </div>

      <div className="rental-collapse-container">
        {/* Render description collapse component */}
        <Collapse
          className="collapse collapse--small"
          title="Description"
          text={rental.description}
        />

        {/* Render equipment collapse component */}
        <Collapse
          className="collapse collapse--small"
          title="Équipements"
          text={rental.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
          state={true}
        />
      </div>
    </section>
  )
}

export default Rental;









