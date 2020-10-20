import React from 'react'
import {Formik, Form, Field} from 'formik'
import './coffeeEquipment.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";


const CoffeeEquipment = ({submitFunction, deleteFunction, formName, data}) => {

  const handleSubmit = (params) => {
    if (submitFunction) {
      submitFunction(params)
    }
  }

  const handleDelete = (equipmentId) => {
    if(deleteFunction){
      deleteFunction(equipmentId)
    }
  }

  return (
    <div className='coffeeEquipment'>
      <Formik
        initialValues={{
          brand: '',
          name: ''
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h1>{formName}</h1>
          {/* <label htmlFor='brand'>Brand</label> */}
          <Field name='brand' type='text' placeholder='Brand'/>
          {/* <label htmlFor='name'>Name</label> */}
          <Field name='name' type='text' placeholder='Name'/>
          <button type='submit'>Add</button>

        </Form>
      </Formik>

      <div className='coffeeEquipment--list'>
        <div className='coffeeEquipment--list__header'>
          <span>ID</span>
          <span>Brand</span>
          <span>Name</span>
        </div>
        {/*{console.log('CoffeeEquipment', data)}*/}
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