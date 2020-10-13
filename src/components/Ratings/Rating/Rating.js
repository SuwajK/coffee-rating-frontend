import React, { useState } from 'react'
import Rate from '../Rate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './rating.css'

const Rating = ({ deleteItem, id, coffee, coffeeDose, preinfusionDose,
  preinfusionTime, waterDose, brewTime, rating, sweetness, bitterness,
  additional }) => {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = (e) => {
    setIsExpanded(state => !state)
  }

  const handleDeleteButtonClick = (e) => {
    e.stopPropagation()
    deleteItem(id)
  }

  return (
    <p className='rating' onClick={handleExpand}>
      <Rate rate={rating} additionalClass={'rating--item__rate'} />
      <span className='rating--item rating--item__label'>Coffee</span>
      <span className='rating--item rating--item coffee'>{coffee.brand} {coffee.name}</span>
      <span className='rating--item rating--item__label'>Coffee dose</span>
      <span className='rating--item rating--item coffee-dose'>{coffeeDose}g</span>
      <span className='rating--item rating--item__label'>Water dose</span>
      <span className='rating--item rating--item water-dose'>{waterDose}g</span>
      <span className='rating--item rating--item__label'>Brew Time</span>
      <span className='rating--item rating--item brew-time'>{brewTime}s</span>
      {isExpanded && <>
        <span
          className='rating--item rating--item__hidden rating--item__label rating--item__extended-label'>
          Preinfusion dose
          </span>
        <span
          className='rating--item rating--item__hidden rating--item__preinfusion-dose'>
          {preinfusionDose}g
          </span>
        <span
          className='rating--item rating--item__hidden rating--item__label rating--item__extended-label'>
          Preinfusion time
        </span>
        <span
          className='rating--item rating--item__hidden rating--item__preinfusion-time'>{preinfusionTime}s
        </span>
      </>
      }
      <FontAwesomeIcon
            icon={faTrashAlt}
            className={`rating--item__delete-button fas fa-trash-alt`}
            onClick={handleDeleteButtonClick}
        />
    </p>
  )
}

Rating.defaultProps = {
  ratings: [{
    coffee: {
      brand: 'Coffee brand',
      name: 'Coffee name',
    },
    coffeeDose: 0.00,
    preinfusionDose: 0.00,
    preinfusionTime: 0.00,
    waterDose: 0.00,
    brewTime: 0.00,
    rating: 0,
  }]
}

export default Rating