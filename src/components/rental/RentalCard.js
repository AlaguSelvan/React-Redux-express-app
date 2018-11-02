import React from 'react'
import { Link }from 'react-router-dom'

export default function RentalCard(props) {
  const rental = props.rental
  const url = `/rentals/${rental.id}`
  return (
    <div className={props.colNum}>
    <Link to ={ url }>
        <div className='card bwm-card'>
          <img className='card-img-top' src={rental.image} alt=''></img>
          <div className='card-block'>
            <h6 className='card-subtitle'>{rental.shared ? 'shared' : 'whole'} &#183; {rental.city}</h6>
            <h4 className='card-title'>{rental.title}</h4>
            <p className='card-text'>${rental.dailyRate} per Night &#183; Free Cancelation</p>
          </div>
        </div>
        </Link>
      </div>
     
  )
}
