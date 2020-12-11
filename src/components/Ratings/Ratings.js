import React, {useState, useEffect} from 'react'
import Rating from './Rating'
import AddRating from './AddRating'
import './ratings.css'
import {getRatingDataFromApi, deleteRatingInApiById} from '../../api/Api'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"
import styled, {css} from 'styled-components'


const RatingIndicator = styled(FontAwesomeIcon)`
  padding: 0.25em;
  vertical-align: middle;

opacity: 0.2;
  ${props => props.active && css`opacity: 0.8;`}
  ${props => props.asc && css`transform: rotate(180deg);`}
`


const Ratings = () => {


  const [ratings, setRatings] = useState([])

  const [sortConfig, setSortConfig] = useState({key: null, ascending: false})
  useEffect(() => {
      getRatingDataFromApi().then(data => {
        setRatings(data);
      })
    }, []
  )

  useEffect(() => {
      setRatings(prevState => [...prevState].sort((rating1, rating2) => {
        if (rating1[sortConfig.key] < rating2[sortConfig.key]) {
          return sortConfig.ascending ? -1 : 1
        } else if (rating1[sortConfig.key] > rating2[sortConfig.key]) {
          return sortConfig.ascending ? 1 : -1
        } else {
          return 0
        }
      }))
    }, [sortConfig]
  )


  const handleDeleteItem = (id) => {
    deleteRatingInApiById(id)
      .then(() => {
        setRatings(prevState => prevState.filter(obj => obj.id !== id))
      });
  }

  const handleSortItem = (e) => {
    let value = e.target.value
    setSortConfig(prevState => {
      return {
        key: value,
        ascending: (prevState.key === value) ? !prevState.ascending : true
      }
    })
  }

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
          <button
            onClick={handleSortItem}
            value={'rating'}
            className='ratings__list--item ratings__list__rate'
          >
            Rating
            <RatingIndicator
              icon={faAngleDown}
              className={`ratings__list__rate__icon fas fa-angle-down`}
              asc={sortConfig.key === 'rating' && sortConfig.ascending}
              active={sortConfig.key === 'rating'}
            />
          </button>
          <button onClick={handleSortItem}
                  value={'brewMethodId'}
                  className='ratings__list--item ratings__list__coffee-brand'
          >
            Method
            <RatingIndicator
              icon={faAngleDown}
              className={`ratings__list__rate__icon fas fa-angle-down`}
              asc={sortConfig.key === 'brewMethodId' && sortConfig.ascending}
              active={sortConfig.key === 'brewMethodId'}
            />
          </button>
          <button onClick={handleSortItem}
                  value={'coffee'}
                  className='ratings__list--item ratings__list__coffee-brand'
          >
            Coffee
            <RatingIndicator
              icon={faAngleDown}
              className={`ratings__list__rate__icon fas fa-angle-down`}
              asc={sortConfig.key === 'coffee' && sortConfig.ascending}
              active={sortConfig.key === 'coffee'}
            />
          </button>
          <button onClick={handleSortItem}
                  value={'coffeeDose'}
                  className='ratings__list--item ratings__list__coffee-dose'
          >
            Coffee Dose
            <RatingIndicator
              icon={faAngleDown}
              className={`ratings__list__rate__icon fas fa-angle-down`}
              asc={sortConfig.key === 'coffeeDose' && sortConfig.ascending}
              active={sortConfig.key === 'coffeeDose'}
            />
          </button>
          <button onClick={handleSortItem}
                  value={'waterDose'}
                  className='ratings__list--item ratings__list__water-dose'
          >
            Water Dose
            <RatingIndicator
              icon={faAngleDown}
              className={`ratings__list__rate__icon fas fa-angle-down`}
              asc={sortConfig.key === 'waterDose' && sortConfig.ascending}
              active={sortConfig.key === 'waterDose'}
            />
          </button>
          <button onClick={handleSortItem}
                  value={'brewTime'}
                  className='ratings__list--item ratings__list__brew-time'
          >
            Brew Time
            <RatingIndicator
              icon={faAngleDown}
              className={`ratings__list__rate__icon fas fa-angle-down`}
              asc={sortConfig.key === 'brewTime' && sortConfig.ascending}
              active={sortConfig.key === 'brewTime'}
            />
          </button>
          {/*<button><span className='ratings__list--item ratings__list__brew-time'>Brew Time</span></button>*/}
        </div>
        {ratings && ratings.map((data, index) =>
          <Rating deleteItem={handleDeleteItem} additionalClass='ratings__list__row' key={index} {...data}/>
        )}
      </div>
    </div>
  )
}

export default Ratings