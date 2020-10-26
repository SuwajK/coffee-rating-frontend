import React, {useState, useEffect} from 'react'
import Rating from './Rating'
import AddRating from './AddRating'
import './ratings.css'
import {getRatingDataFromApi, deleteRatingInApiById} from '../../api/Api'

const Ratings = () => {

  const [ratings, setRatings] = useState([])

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

  const addRating = (rating) => {
    setRatings(prevState => [...prevState, rating])
  }

  return (
    <div className={'ratings'}>
      <div>
        <h1>Ratings</h1>
        {<AddRating addItem={addRating}/>}
      </div>

      <div className='ratings__list'>
        <div className='ratings__list__header'>
          <span className='ratings__list--item ratings__list__rate'>Rating</span>
          <span className='ratings__list--item ratings__list__coffee-brand'>Coffee</span>
          <span className='ratings__list--item ratings__list__coffee-dose'>Coffee Dose</span>
          <span className='ratings__list--item ratings__list__water-dose'>Water Dose</span>
          <span className='ratings__list--item ratings__list__brew-time'>Brew Time</span>
        </div>
        {ratings && ratings.map((data, index) =>
          <div className='ratings__list__row' key={index}>
            <Rating deleteItem={handleDeleteItem} {...data} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Ratings
