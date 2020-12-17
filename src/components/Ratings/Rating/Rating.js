import React, {useState} from 'react'
import Rate from '../Rate'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './rating.css'
import {getBrewMethodById} from "../../../Utils/brewMethods";
import {connect} from 'react-redux'

const Rating = ({
                  deleteItem, id, coffee, coffeeDose, preinfusionDose,
                  preinfusionTime, waterDose, brewTime, rating, brewMethodId, sweetness, bitterness,
                  additional, additionalClass, isLoggedIn
                }) => {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(state => !state)
  }

  const handleDeleteButtonClick = (e) => {
    e.stopPropagation()
    deleteItem(id)
  }


  return (
    <p className={`rating ${additionalClass}`} onClick={handleExpand}>
      <Rate rate={rating} additionalClass={'rating__item--rate'}/>
      <span className='rating__item rating__item--label'>Method</span>
      <span
        className='rating__item rating__item coffee-dose'>{brewMethodId && getBrewMethodById(brewMethodId).label}</span>
      <span className='rating__item rating__item--label'>Coffee</span>
      <span className='rating__item rating__item coffee'>{coffee.brand} {coffee.name}</span>
      <span className='rating__item rating__item--label'>Coffee dose</span>
      <span className='rating__item rating__item coffee-dose'>{coffeeDose ? `${coffeeDose}g` : '-'}</span>
      <span className='rating__item rating__item--label'>Water dose</span>
      <span className='rating__item rating__item water-dose'>{waterDose ? `${waterDose}g` : '-'}</span>
      <span className='rating__item rating__item--label'>Brew Time</span>
      <span className='rating__item rating__item brew-time'>{brewTime ? `${brewTime}s` : '-'}</span>
      {isExpanded && <>
        <span
          className='rating__item rating__item--hidden rating__item--hidden--label rating__item--label rating__item--extended-label'>
          Preinfusion dose
          </span>
        <span
          className='rating__item rating__item--hidden rating__item--hidden--value rating__item--preinfusion-dose'>
          {preinfusionDose}g
          </span>
        <span
          className='rating__item rating__item--hidden rating__item--hidden--label rating__item--label rating__item--extended-label'>
          Preinfusion time
        </span>
        <span
          className='rating__item rating__item--hidden rating__item--hidden--value rating__item--preinfusion-time'>
          {preinfusionTime}s
        </span>
      </>
      }
      {
        isLoggedIn && <FontAwesomeIcon
          icon={faTrashAlt}
          className={`rating__item--delete-button fas fa-trash-alt`}
          onClick={handleDeleteButtonClick}
        />
      }
    </p>
  )
}

Rating.defaultProps = {
  brewMethodId: 0,
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
  additionalClass: ''
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(Rating)