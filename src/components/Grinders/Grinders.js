import React, {useEffect, useState} from 'react'
import {deleteGrinderInApiById, getGrinderDataFromApi, sendGrinderDataToApi} from '../../api/Api'
import Grinder from './Grinder/Grinder'
import Button from '../reusable/Button/Button'
import './grinders.css'
import {Field, Form, Formik} from "formik";

const Grinders = (props) => {

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


  return (
    <div className='grinders'>
      <Formik
        initialValues={{
          brand: '',
          model: ''
        }}
        onSubmit={addGrinder}
      >
        <Form>
          <h1>Grinders</h1>
          <Field name='brand' type='text' placeholder='Brand'/>
          <Field name='model' type='text' placeholder='Model'/>
          <Button className='light' type='submit'>Add</Button>

        </Form>
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