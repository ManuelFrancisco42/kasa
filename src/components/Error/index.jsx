/*  Import tools */

import React from 'react'
import { Link } from 'react-router-dom'

/*  Component */

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="active-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error
