import React, { useState, useEffect } from 'react'
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
    <tr className='addRating'>
      {/* <td><Field name='coffeeMachineId' type='text' /></td> */}
      {/* <label htmlFor='coffeeMachineId'>Coffee machine ID</label> */}
      <td><input name='coffeeBrand' type='text' onChange={handleInput} value={state.coffee.brand} /></td>
      {/* <label htmlFor='coffee.brand'>Coffee brand</label> */}
      <td><input name='coffeeName' type='text' onChange={handleInput} value={state.coffee.name} /></td>
      {/* <label htmlFor='coffee.name'>Coffee name</label> */}
      <td><input name='coffeeDose' type='text' onChange={handleInput} value={state.coffeeDose} /></td>
      {/* <label htmlFor='coffeeDose'>Coffee dose</label> */}
      <td><input name='preinfusionDose' type='text' onChange={handleInput} value={state.preinfusionDose} /></td>
      {/* <label htmlFor='preinfusionDose'>Preinfusion dose</label> */}
      <td><input name='preinfusionTime' type='text' onChange={handleInput} value={state.preinfusionTime} /></td>
      {/* <label htmlFor='preinfusionTime'>Preinfusion Time</label> */}
      <td><input name='waterDose' type='text' onChange={handleInput} value={state.waterDose} /></td>
      {/* <label htmlFor='waterDose'>Water dose</label> */}
      <td><input name='brewTime' type='text' onChange={handleInput} value={state.brewTime} /></td>
      {/* <label htmlFor='brewTime'>Brew time</label> */}
      <td><Rate rate={state.rating} setRate={setRate} editable={true} /></td>
      <td><button onClick={() => sendRatingToApi(state)}>Add</button></td>
    </tr>
  )
}


export default AddRating