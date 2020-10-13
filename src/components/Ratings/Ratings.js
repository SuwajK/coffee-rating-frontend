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


  useEffect(() => {
    getRatingDataFromApi().then(data => setRatings(data))
  }, []

  )

  return (
    <>
      {/* <button onClick={() => {
        getDataFromApi().then(data => setRatings(data))
      }}>GetDataFromApi</button> */}



      <table className='ratings'>
        <thead>
          <tr>
            <th><span className='item coffee-brand'>Coffee Brand</span></th>
            <th><span className='item coffee-name'>Coffee Name</span></th>
            <th><span className='item coffee-dose'>Coffee Dose</span></th>
            <th><span className='item preinfusion-dose'>Preinfusion Dose</span></th>
            <th><span className='item preinfusion-time'>Preinfusion Time</span></th>
            <th><span className='item water-dose'>Water Dose</span></th>
            <th><span className='item brew-time'>Brew Time</span></th>
            <th><span className='item rating'>Rating</span></th>
            <th>
              <button className='item add' onClick={handleAddRatingButtonClick}>
                {showAddRating ? '-' : '+'}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {showAddRating && <AddRating />}
          {ratings && ratings.map((data, index) => <Rating {...data} key={index} />)}
        </tbody>
      </table>
    </>
  )
}

export default Ratings
