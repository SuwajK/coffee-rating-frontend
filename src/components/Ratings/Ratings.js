import React, { useState, useEffect } from 'react'
import Rating from './Rating'
import AddRating from './AddRating'
import Button from '../reusable/Button/Button'
import './ratings.css'
import { getRatingDataFromApi, deleteRatingInApiById } from '../../api/Api'

const Ratings = () => {

  const [ratings, setRatings] = useState([])
  const [showAddRating, setShowAddRating] = useState(false)

  const handleAddRatingButtonClick = (e) => {
    setShowAddRating(prevState => !prevState)
  }

  const handleDeleteItem = (id) => {
    deleteRatingInApiById(id)
      .then(() => {
        setRatings(prevState => prevState.filter(obj => obj.id !== id))
      });
  }


  useEffect(() => {
    getRatingDataFromApi().then(data => setRatings(data))
  }, []

  )

  return (
    <>
        {showAddRating && <AddRating className='ratings__addRating'/>}
      <div className='ratings'>
        {/* <p classname='ratings__head'> */}
        <span className='ratings__item ratings__rate'>Rating</span>
        <span className='ratings__item ratings__coffee-brand'>Coffee</span>
        {/* <span className='ratings__item ratings__coffee-name'>Coffee Name</span> */}
        <span className='ratings__item ratings__coffee-dose'>Coffee Dose</span>
        {/* <span className='ratings__item ratings__preinfusion-dose'>Preinfusion Dose</span>
            <span className='ratings__item ratings__preinfusion-time'>Preinfusion Time</span> */}
        <span className='ratings__item ratings__water-dose'>Water Dose</span>
        <span className='ratings__item ratings__brew-time'>Brew Time</span>

        <Button className='ratings__item ratings__add dark' onClick={handleAddRatingButtonClick}>
          {showAddRating ? '-' : '+'}
        </Button>
        {ratings && ratings.map((data, index) =>
          <Rating deleteItem={handleDeleteItem} key={index} {...data} />)
        }
      </div>
    </>
  )
}

export default Ratings
