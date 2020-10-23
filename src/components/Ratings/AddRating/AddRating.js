import React from 'react'
import Rate from '../Rate'
import Button from '../../reusable/Button/Button'
import './addrating.css'
import {sendRatingToApi} from '../../../api/Api'
import {Field, Form, Formik} from "formik";

const AddRating = ({addItem}) => {

  const handleSubmit = (data) => {
    sendRatingToApi(data).then(() => addItem(data))
  }

  const validateRequiredField = (value) =>
    (value !== null && value !== undefined && value !== '')
      ? ''
      : 'This field is required'

  return (
    <Formik
      initialValues={{
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
        rating: 0
      }}
      onSubmit={handleSubmit}
    >

      {({errors, touched, values, setFieldValue}) => (
        <Form className='addRating'>
          {/* <Field name='coffeeMachineId' type='text' /> */}
          {/* <label htmlFor='coffeeMachineId'>Coffee machine ID</label> */}
          <label htmlFor='coffee.brand'>Coffee brand</label>
          <Field name='coffee.brand' type='text' validate={validateRequiredField}/>
          {errors.coffee && touched.coffee && errors.coffee.brand && touched.coffee.brand &&
          <span>{errors.coffee.brand}</span>}

          <label htmlFor='coffee.name'>Coffee name</label>
          <Field name='coffee.name' type='text' validate={validateRequiredField}/>
          {errors.coffee && touched.coffee && errors.coffee.name && touched.coffee.name &&
          <span>{errors.coffee.name}</span>}

          <label htmlFor='coffeeDose'>Coffee dose</label>
          <Field name='coffeeDose' type='number' validate={validateRequiredField}/>
          {errors.coffeeDose && touched.coffeeDose && <span>{errors.coffeeDose}</span>}

          <label htmlFor='preinfusionDose'>Preinfusion dose</label>
          <Field name='preinfusionDose' type='number' validate={validateRequiredField}/>
          {errors.preinfusionDose && touched.preinfusionDose && <span>{errors.preinfusionDose}</span>}

          <label htmlFor='preinfusionTime'>Preinfusion Time</label>
          <Field name='preinfusionTime' type='number' validate={validateRequiredField}/>
          {errors.preinfusionTime && touched.preinfusionTime && <span>{errors.preinfusionTime}</span>}

          <label htmlFor='waterDose'>Water dose</label>
          <Field name='waterDose' type='number' validate={validateRequiredField}/>
          {errors.waterDose && touched.waterDose && <span>{errors.waterDose}</span>}

          <label htmlFor='brewTime'>Brew time</label>
          <Field name='brewTime' type='number' validate={validateRequiredField}/>
          {errors.brewTime && touched.brewTime && <span>{errors.brewTime}</span>}

          <label htmlFor='Rating'>Rating</label>
          <Rate name='rating' rate={values['rating']} setRate={e => setFieldValue('rating', e)} editable={true}/>

          <Button className='light' type={'submit'}>Add</Button>
        </Form>
      )}
    </Formik>
  )
}


export default AddRating