
/*  Import tools, components and images */

import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import homeBanner from '../../assets/banner_home.png'
import rentalList from '../../data/logements.json'



/*  Component */

function Home() {
  return (
    <div>
      {/* Render the banner component */}
      <Banner
        picture={homeBanner}
        title="Chez vous, partout et ailleurs"
        className="banner"
      />

      <section className="rental-section">
        <div className="rental-section__cards-container">
          {rentalList.map((rental) => (

            // Create a link to the rental's details page

            <Link to={`/logement/${rental.id}`} key={rental.id}>

              {/* Render a card for each rental */}
              <Card picture={rental.cover} title={rental.title} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

