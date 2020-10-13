import React from 'react'
import Rate from '../Rate'

const Rating = ({ coffee, coffeeDose, preinfusionDose,
  preinfusionTime, waterDose, brewTime, rating, sweetness, bitterness,
  additional }) => {


  return (
    <tr>
      <td><span className='item coffee'>{coffee.brand}</span></td>
      <td><span className='item coffee-name'>{coffee.name}</span></td>
      <td><span className='item coffee-dose'>{coffeeDose}</span></td>
      <td><span className='item preinfusion-dose'>{preinfusionDose}</span></td>
      <td><span className='item preinfusion-time'>{preinfusionTime}</span></td>
      <td><span className='item water-dose'>{waterDose}</span></td>
      <td><span className='item brew-time'>{brewTime}</span></td>
      <td><Rate className='item rating' rate={rating} /></td>
      <td><span className='item'></span></td>
    </tr>
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