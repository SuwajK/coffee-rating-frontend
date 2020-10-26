import React from 'react'
import Rate from '../Rate'
import './addrating.css'
import {sendRatingToApi} from '../../../api/Api'
import {Field, Form, Formik} from "formik";
import {TextField} from "formik-material-ui";
import Button from "@material-ui/core/Button";

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
        coffeeDose: '',
        preinfusionDose: '',
        preinfusionTime: '',
        waterDose: '',
        brewTime: '',
        rating: ''
      }}
      onSubmit={handleSubmit}
    >

      {() => (
        <Form className='addRating'>
          {/* <Field name='coffeeMachineId' type='text' /> */}
          {/* <label htmlFor='coffeeMachineId'>Coffee machine ID</label> */}
          <Field
            component={TextField}
            name='coffee.brand'
            label='Coffee brand'
            type='text'
            validate={validateRequiredField}
          />
          <Field
            component={TextField}
            name='coffee.name'
            label='Coffee name'
            type='text'
            validate={validateRequiredField}
          />
          <Field
            component={TextField}
            name='coffeeDose'
            label='Coffee dose'
            type='number'
            validate={validateRequiredField}
          />
          <Field
            component={TextField}
            name='preinfusionDose'
            label='Preinfusion dose'
            type='number'
            validate={validateRequiredField}
          />
          <Field
            component={TextField}
            name='preinfusionTime'
            label='Preinfusion Time'
            type='number'
            validate={validateRequiredField}
          />
          <Field
            component={TextField}
            name='waterDose'
            label='Water dose'
            type='number'
            validate={validateRequiredField}
          />
          <Field
            component={TextField}
            name='brewTime'
            label='Brew time'
            type='number'
            validate={validateRequiredField}
          />

          <Rate name='rating' rate={values['rating']} setRate={e => setFieldValue('rating', e)} editable={true}/>

          <Button type={'submit'}>Add</Button>
        </Form>
      )}
    </Formik>
  )
}


export default AddRating