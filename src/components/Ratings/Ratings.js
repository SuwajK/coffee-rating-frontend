import React, { useState, useEffect } from 'react'
import Rating from './Rating'
import AddRating from './AddRating'
import './ratings.css'
import { getRatingDataFromApi } from '../../api/Api'

const Ratings = () => {

  const [ratings, setRatings] = useState([])
  const [showAddRating, setShowAddRating] = useState(false)

  const handleAddRatingButtonClick = (e) => {
    setShowAddRating(prevState => !prevState)
  }

  const handleDeleteItem = (id) => {
    console.log('Delete rating', id)
  }


  useEffect(() => {
    getRatingDataFromApi().then(data => setRatings(data))
  }, []

  )

  return (
    <>
      {/* <button onClick={() => {
        getDataFromApi().then(data => setRatings(data))
      }}>GetDataFromApi</button> */}



        {showAddRating && <AddRating className='ratings--addRating'/>}
      <div className='ratings'>
        {/* <p classname='ratings--head'> */}
        <span className='ratings--item ratings--rate'>Rating</span>
        <span className='ratings--item ratings--coffee-brand'>Coffee</span>
        {/* <span className='ratings--item ratings--coffee-name'>Coffee Name</span> */}
        <span className='ratings--item ratings--coffee-dose'>Coffee Dose</span>
        {/* <span className='ratings--item ratings--preinfusion-dose'>Preinfusion Dose</span>
            <span className='ratings--item ratings--preinfusion-time'>Preinfusion Time</span> */}
        <span className='ratings--item ratings--water-dose'>Water Dose</span>
        <span className='ratings--item ratings--brew-time'>Brew Time</span>

        <button className='ratings--item ratings--add' onClick={handleAddRatingButtonClick}>
          {showAddRating ? '-' : '+'}
        </button>
        {/* </p> */}
        {/* <p className='ratings--body'> */}
        {ratings && ratings.map((data, index) =>
          <Rating deleteItem={handleDeleteItem} key={index} {...data} />)
        }
        {/* </p> */}
      </div>
    </>
  )
}

export default Ratings
