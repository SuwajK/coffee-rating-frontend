import React, {useState, useEffect} from 'react'
import Rating from './Rating'
import AddRating from './AddRating'
import './ratings.css'
import {getRatingDataFromApi, deleteRatingInApiById} from '../../api/Api'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"
import styled from 'styled-components'

//TODO: Fix coffee sorting

const RatingIndicator = styled.span`
  padding: 0.25em;
  vertical-align: middle;
  opacity: ${props => props.$active ? '0.8' : '0.2'};
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


  const TableHeaderItem = ({text, name, icon, handleSortItem, children}) => {
    const asc = !!(sortConfig.key === name && sortConfig.ascending)
    return (
      <button onClick={handleSortItem}
              value={name}
              className='ratings__list--item ratings__list__brew-time'
      >
        {text}
        {children}
        <RatingIndicator
          $active={sortConfig.key === name}
          className={`ratings__list__rate__icon fas fa-angle-down`}
        >
          <FontAwesomeIcon
            icon={icon}
            className={`ratings__list__rate__icon fas fa-angle-down`}
            flip={asc ? 'vertical' : null}
          />
        </RatingIndicator>
      </button>
    )
  }

  return (
    <div className={'ratings'}>
      <div>
        <h1>Ratings</h1>
        {<AddRating addItem={addRating}/>}
      </div>

      <div className='ratings__list'>
        <div className='ratings__list__header'>
          <TableHeaderItem text='Rating' name='rating' handleSortItem={handleSortItem} icon={faAngleDown}/>
          <TableHeaderItem text='Method' name='brewMethodId' handleSortItem={handleSortItem} icon={faAngleDown}/>
          <TableHeaderItem text='Coffee' name='coffee' handleSortItem={handleSortItem} icon={faAngleDown}/>
          <TableHeaderItem text='Coffee Dose' name='coffeeDose' handleSortItem={handleSortItem} icon={faAngleDown}/>
          <TableHeaderItem text='Water Dose' name='waterDose' handleSortItem={handleSortItem} icon={faAngleDown}/>
          <TableHeaderItem text='Brew Time' name='brewTime' handleSortItem={handleSortItem} icon={faAngleDown}/>
        </div>
        {ratings && ratings.map((data, index) =>
          <Rating deleteItem={handleDeleteItem} additionalClass='ratings__list__row' key={index} {...data}/>
        )}
      </div>
    </div>
  )
}

export default Ratings