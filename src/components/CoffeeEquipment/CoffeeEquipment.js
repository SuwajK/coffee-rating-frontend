import React from 'react'
import {Formik, Form, Field} from 'formik'
// import Button from '../reusable/Button/Button'
import './coffeeEquipment.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "formik-material-ui";
import Button from "@material-ui/core/Button";


const CoffeeEquipment = ({submitFunction, deleteFunction, formName, data}) => {

  const handleSubmit = (params, {resetForm}) => {
    if (submitFunction) {
      resetForm()
      submitFunction(params)
    }
  }

  const handleDelete = (equipmentId) => {
    if(deleteFunction){
      deleteFunction(equipmentId)
    }
  }

  const validateRequiredField = (value) => value ? '' : 'This field is required'

  return (
    <div className='coffeeEquipment'>
      <Formik
        initialValues={{
          brand: '',
          name: ''
        }}
        onSubmit={handleSubmit}
      >
        {() =>
          <Form>
            <h1>{formName}</h1>
            <Field
              component={TextField}
              name='brand'
              type='text'
              fullWidth
              label='Brand'
              validate={validateRequiredField}
            />
            <Field
              component={TextField}
              name='name'
              type='text'
              fullWidth
              label='Name'
              validate={validateRequiredField}
            />
            <Button type='submit'>Add</Button>

          </Form>
        }
      </Formik>

      <div className='coffeeEquipment--list'>
        <div className='coffeeEquipment--list__header'>
          <span>ID</span>
          <span>Brand</span>
          <span>Name</span>
        </div>
        {data && data.map(
          row => <div className='coffeeEquipment--list__row' key={row.id}>
            <span>{row.id}</span>
            <span>{row.brand}</span>
            <span>{row.name}</span>
            <span>
              <FontAwesomeIcon
              icon={faTrashAlt}
              className={`rating__item--delete-button fas fa-trash-alt`}
              onClick={() => handleDelete(row.id)}
            /></span>
          </div>
        )}

      </div>
    </div>
  )
}

CoffeeEquipment.defaultProps = {
  submitFunction: (e) =>
    console.log('Provide function submitFunction. Call params:', e),
  formName: 'Provide formName property',
  data: []
}

export default CoffeeEquipment