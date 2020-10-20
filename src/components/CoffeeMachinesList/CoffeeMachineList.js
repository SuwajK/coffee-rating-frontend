import React, {useEffect, useState} from 'react'
import CoffeeEquipment from '../CoffeeEquipment'
import {deleteCoffeeMachineInApiById, getCoffeeMachineDataFromApi, sendCoffeeMachineDataToApi} from '../../api/Api'

const CoffeeMachineList = (props) => {

  const [data, setData] = useState([])


  useEffect(() => {
    getCoffeeMachineDataFromApi().then(resp => setData(resp))
  }, [])


  const addCoffeeMachine = (coffee) => {
    sendCoffeeMachineDataToApi(coffee)
      .then(c => setData(prevState => [...prevState, c]))
  }

  const deleteCoffeeMachine = (coffeeMachineId) => {
    deleteCoffeeMachineInApiById(coffeeMachineId)
      .then(() => setData(
        prevState => prevState.filter(obj => obj.id !== coffeeMachineId))
      )
  }

  const prepareDataToRender = () => {
    return data.map(row => {
      return {
        id: row.id,
        brand: row.brand,
        name: row.model,
      }
    })
  }

  return (
    <CoffeeEquipment
      submitFunction={addCoffeeMachine}
      deleteFunction={deleteCoffeeMachine}
      formName='Coffee Machine List'
      data={prepareDataToRender()}/>
  )
}

export default CoffeeMachineList