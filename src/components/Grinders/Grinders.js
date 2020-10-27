import React, {useEffect, useState} from 'react'
import {deleteGrinderInApiById, getGrinderDataFromApi, sendGrinderDataToApi} from '../../api/Api'
import Grinder from './Grinder/Grinder'
import './grinders.css'
import {Field, Form, Formik} from "formik";
import Button from "@material-ui/core/Button";
import {TextField} from "formik-material-ui";

const Grinders = () => {

  const [data, setData] = useState([{id: 0}])


  useEffect(() => {
    getGrinderDataFromApi().then(resp => {
        setData(resp)
      }
    )
  }, [])


  const addGrinder = (grinder, {resetForm}) => {
    sendGrinderDataToApi(grinder)
      .then(c => setData(prevState => [...prevState, c]))
      .then(resetForm())
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
        {() =>
        <Form>
          <h1>Grinders</h1>
          <Field
            component={TextField}
            name='brand'
            type='text'
            label='Brand'
            fullWidth
            validate={validateRequiredField}/>
          <Field
            component={TextField}
            name='model'
            type='text'
            label='Model'
            fullWidth
            validate={validateRequiredField}/>
          <Button type='submit'>Add</Button>

        </Form>
        }
      </Formik>
      <div className='grinders__list'>
      <div className='grinders__list__header'>
        <span>ID</span>
        <span>Brand</span>
        <span>Model</span>
      </div>

        {data && data.map(g =>
          <div className='grinders__list__row'>
            <Grinder key={g.id} {...g} deleteFunction={deleteGrinder}/>
          </div>)
        }
      </div>


    </div>
  )
}

export default Grinders