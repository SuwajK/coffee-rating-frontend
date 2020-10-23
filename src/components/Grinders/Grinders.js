import React, {useEffect, useState} from 'react'
import {deleteGrinderInApiById, getGrinderDataFromApi, sendGrinderDataToApi} from '../../api/Api'
import Grinder from './Grinder/Grinder'
import Button from '../reusable/Button/Button'
import './grinders.css'
import {Field, Form, Formik} from "formik";

const Grinders = () => {

  const [data, setData] = useState([{id: 0}])


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

  const deleteGrinder = (grinderId) => {
    deleteGrinderInApiById(grinderId)
      .then(() => {
        setData(prevState => prevState.filter(obj => obj.id !== grinderId))
      })
  }

  const validateRequiredField = (value) => value ? '' : 'This field is required'

  return (
    <div className='grinders'>
      <Formik
        initialValues={{
          brand: '',
          model: ''
        }}
        onSubmit={addGrinder}
      >
        {({errors, touched}) =>
        <Form>
          <h1>Grinders</h1>
          <Field name='brand' type='text' placeholder='Brand' validate={validateRequiredField}/>
          {errors.brand && touched.brand && <span>{errors.brand}</span>}
          <Field name='model' type='text' placeholder='Model' validate={validateRequiredField}/>
          {errors.model && touched.model && <span>{errors.model}</span>}
          <Button className='light' type='submit'>Add</Button>

        </Form>
        }
      </Formik>
      <div className='grinders--list__header'>
        <span>ID</span>
        <span>Brand</span>
        <span>Model</span>
      </div>
      <div className='grinders--list__row'>
        {data && data.map(g => <Grinder key={g.id} {...g} deleteFunction={deleteGrinder}/>)}
      </div>


    </div>
  )
}

export default Grinders