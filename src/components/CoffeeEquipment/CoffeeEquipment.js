import React from 'react'
import { Formik, Form, Field } from 'formik'
import './coffeeEquipment.css'


const CoffeeEquipment = ({ submitFunction, formName, data }) => {

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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {console.log('CoffeeEquipment', data)}
            {data.map(
              row =>
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.brand}</td>
                  <td>{row.name}</td>
                </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  )
}

CoffeeEquipment.defaultProps = {
  submitFunction: (e) => 
    console.log('Provide function submitFunction. Call params:', e),
  formName: 'Provide formName property',
  data: [
    { id: 'ID1', brand: 'Brand1', name: 'Name1' },
    { id: 'ID2', brand: 'Brand2', name: 'Name2' },
    { id: 'ID3', brand: 'Brand3', name: 'Name3' }
  ]
}

export default CoffeeEquipment