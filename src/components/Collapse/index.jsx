/*  Import tools */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import expandArrow from '../../assets/expand_arrow.svg'

/*  Component */

function Collapse({ title, text, className }) {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  const expandIconClass = open
    ? 'expand_icon expand_icon--opened'
    : 'expand_icon'

  return (
    <div className={className}>
      <button className="collapse__title-container" onClick={toggle}>
        <h2 className="collapse__title-container__title">{title}</h2>
        <img
          className={expandIconClass}
          src={expandArrow}
          alt="Cliquez-ici pour dérouler le texte"
        />
      </button>
      {open && <div className="collapse__text">{text}</div>}
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Collapse
