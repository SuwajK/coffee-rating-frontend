import React, { useEffect, useState } from 'react'
import CoffeeEquipment from '../CoffeeEquipment'
import { getCoffeeDataFromApi, sendCoffeeDataToApi } from '../../api/Api'

const CoffeeList = (props) => {

  const [data, setData] = useState([{ id: 0 }])


  useEffect(() => {
    getCoffeeDataFromApi().then(resp => setData(resp))
  }, [])


  const addCoffee = (coffee) => {
    sendCoffeeDataToApi(coffee)
      .then(c => setData(prevState => [...prevState, c]))
  }

  return (
    <CoffeeEquipment
      submitFunction={addCoffee}
      formName='Coffee List'
      data={data} />
  )
}

export default CoffeeList