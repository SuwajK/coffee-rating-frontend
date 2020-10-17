import React from 'react'
import {Formik, Form, Field} from 'formik'
import './coffeeEquipment.css'


const CoffeeEquipment = ({submitFunction, formName, data}) => {

  const handleSubmit = (params) => {
    submitFunction(params)
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