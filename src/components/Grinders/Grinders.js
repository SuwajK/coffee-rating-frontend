import React, { useEffect, useState } from 'react'
import { getGrinderDataFromApi, sendGrinderDataToApi } from '../../api/Api'
import Grinder from './Grinder/Grinder'
import './grinders.css'
import {Field, Form, Formik} from "formik";

const Grinders = (props) => {

  const [data, setData] = useState([{ id: 0 }])


  useEffect(() => {
    getGrinderDataFromApi().then(resp => {
      setData(resp)
    }
    )
  }, [])


  const addGrinder = (grinder) => {
    sendGrinderDataToApi(grinder)
      .then(c => setData(prevState => [...prevState, c]))
  }


  return (
    <div className='grinders'>
      <Formik
        initialValues={{
          brand: '',
          name: ''
        }}
        onSubmit={addGrinder}
      >
        <Form>
          <h1>Grinders</h1>
          {/* <label htmlFor='brand'>Brand</label> */}
          <Field name='brand' type='text' placeholder='Brand'/>
          {/* <label htmlFor='name'>Name</label> */}
          <Field name='name' type='text' placeholder='Name'/>
          <button type='submit'>Add</button>

        </Form>
      </Formik>
        <div className='grinders--list__header'>
          <span>ID</span>
          <span>Brand</span>
          <span>Model</span>
        </div>
        <div className='grinders--list__row'>
          {data.map(g => <Grinder key={g.id} {...g} />)}
        </div>


    </div>
  )
}

export default Grinders