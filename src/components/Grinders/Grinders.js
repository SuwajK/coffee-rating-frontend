import React, { useEffect, useState } from 'react'
import { getGrinderDataFromApi, sendGrinderDataToApi } from '../../api/Api'
import Grinder from './Grinder/Grinder'

const Grinders = (props) => {

  const [data, setData] = useState([{ id: 0 }])


  useEffect(() => {
    getGrinderDataFromApi().then(resp => {
      setData(resp)
    }
    )
  }, [])


  const addGrinder = (coffee) => {
    sendGrinderDataToApi(coffee)
      .then(c => setData(prevState => [...prevState, c]))
  }

  return (
    <>
      <table>
        <thead>
          <tr><th>Brand</th><th>Model</th></tr>
        </thead>
        <tbody>
          {data.map(g => <Grinder key={g.id} {...g} />)}
        </tbody>
      </table>

    </>
  )
}

export default Grinders