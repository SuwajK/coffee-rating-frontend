import React, { useState } from 'react'
import Rate from '../Rate'
import './addrating.css'
import { sendRatingToApi } from '../../../api/Api'

const AddRating = () => {

  const [state, setState] = useState({
    coffeeMachineId: 1,
    coffee: {
      brand: '',
      name: '',
    },
    coffeeDose: 0,
    preinfusionDose: 0,
    preinfusionTime: 0,
    waterDose: 0,
    brewTime: 0,
    rating: 0,
  })

  const setRate = (number) => {
    setState({
      ...state,
      rating: number
    })
  }

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'coffeeBrand') {
      name = 'coffee'
      value = { ...state.coffee, brand: value }
    } else if (name === 'coffeeName') {
      name = 'coffee'
      value = { ...state.coffee, name: value }
    }
    
    setState({
      ...state,
      [name]: value
    })

  }

  return (
    <p className='addRating'>
      {/* <Field name='coffeeMachineId' type='text' /> */}
      {/* <label htmlFor='coffeeMachineId'>Coffee machine ID</label> */}
      <label htmlFor='coffee.brand'>Coffee brand</label>
      <input name='coffeeBrand' type='text' onChange={handleInput} value={state.coffee.brand} />
      <label htmlFor='coffee.name'>Coffee name</label>
      <input name='coffeeName' type='text' onChange={handleInput} value={state.coffee.name} />
      <label htmlFor='coffeeDose'>Coffee dose</label>
      <input name='coffeeDose' type='text' onChange={handleInput} value={state.coffeeDose} />
      <label htmlFor='preinfusionDose'>Preinfusion dose</label>
      <input name='preinfusionDose' type='text' onChange={handleInput} value={state.preinfusionDose} />
      <label htmlFor='preinfusionTime'>Preinfusion Time</label>
      <input name='preinfusionTime' type='text' onChange={handleInput} value={state.preinfusionTime} />
      <label htmlFor='waterDose'>Water dose</label>
      <input name='waterDose' type='text' onChange={handleInput} value={state.waterDose} />
      <label htmlFor='brewTime'>Brew time</label>
      <input name='brewTime' type='text' onChange={handleInput} value={state.brewTime} />
      <label htmlFor='brewTime'>Rating</label>
      <Rate rate={state.rating} setRate={setRate} editable={true} />
      <button onClick={() => sendRatingToApi(state)}>Add</button>
    </p>
  )
}


export default AddRating