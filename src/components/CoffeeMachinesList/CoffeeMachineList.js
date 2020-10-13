import React, { useEffect, useState } from 'react'
import CoffeeEquipment from '../CoffeeEquipment'
import { getCoffeeMachineDataFromApi, sendCoffeeMachineDataToApi } from '../../api/Api'

const CoffeeMachineList = (props) => {

  const [data, setData] = useState([{ id: 0 }])


  useEffect(() => {
    getCoffeeMachineDataFromApi().then(resp => setData(resp))
  }, [])


  const addCoffeeMachine = (coffee) => {
    sendCoffeeMachineDataToApi(coffee)
      .then(c => setData(prevState => [...prevState, c]))
  }

  return (
    <CoffeeEquipment
      submitFunction={addCoffeeMachine}
      formName='Coffee Machine List'
      data={data} />
  )
}

export default CoffeeMachineList