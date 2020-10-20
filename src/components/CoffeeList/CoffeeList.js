import React, { useEffect, useState } from 'react'
import CoffeeEquipment from '../CoffeeEquipment'
import { getCoffeeDataFromApi, sendCoffeeDataToApi, deleteCoffeeInApiById } from '../../api/Api'

const CoffeeList = (props) => {

  const [data, setData] = useState([])


  useEffect(() => {
    getCoffeeDataFromApi().then(resp => setData(resp))
  }, [])


  const addCoffee = (coffee) => {
    sendCoffeeDataToApi(coffee)
      .then(c => setData(prevState => [...prevState, c]))
  }

  const deleteCoffee = (coffeeId) => {
    deleteCoffeeInApiById(coffeeId)
      .then(() => setData(
        prevState => prevState.filter(obj => obj.id !== coffeeId))
      )
  }

  return (
    <CoffeeEquipment
      submitFunction={addCoffee}
      deleteFunction={deleteCoffee}
      formName='Coffee List'
      data={data} />
  )
}

export default CoffeeList