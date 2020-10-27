import React from 'react'
import Rate from '../Rate'
import './addrating.css'
import {sendRatingToApi} from '../../../api/Api'
import {Field, Form, Formik} from "formik";
import {TextField} from "formik-material-ui";
import {TextField as MaterialTextField} from '@material-ui/core';
import {createFilterOptions} from '@material-ui/lab/Autocomplete';
import Button from "@material-ui/core/Button";
import {Autocomplete} from "formik-material-ui-lab";

const AddRating = ({addItem}) => {

  const handleSubmit = (data, {resetForm}) => {
    console.log(data)
    sendRatingToApi(data)
      .then(item => addItem(item))
      .then(resetForm())
  }

  const validateRequiredField = (value) =>
    (value !== null && value !== undefined && value !== '')
      ? ''
      : 'This field is required'

  const filterAutocompleteFieldOptionsForRemovingDuplicates = (options, params) => {
    const filter = createFilterOptions()
    const filteredOptions = filter(options, params)
    if (params.inputValue !== '' && !options.includes(params.inputValue)) {
      filteredOptions.push(params.inputValue)
    }
    return filteredOptions
  }

  const coffeeDoses = ['10', '20', '30', '40', '50', '100', '200']
  const preinfusionDoses = ['10', '20', '30', '40', '50', '100', '200']


  return (
    <Formik
      initialValues={{
        coffeeMachineId: 1,
        coffee: {
          brand: '',
          name: '',
        },
        coffeeDose: null,
        preinfusionDose: null,
        preinfusionTime: '',
        waterDose: '',
        brewTime: '',
        rating: ''
      }}
      onSubmit={handleSubmit}
    >

      {({values, setFieldValue}) => (
        <Form className='addRating'>
          {/*<Field name='coffeeMachineId' type='text' />*/}
          {/*<label htmlFor='coffeeMachineId'>Coffee machine ID</label>*/}
          <Field
            component={TextField}
            name='coffee.brand'
            label='Coffee brand'
            type='text'
            fullWidth
            validate={validateRequiredField}
          />
          <Field
            component={TextField}
            name='coffee.name'
            label='Coffee name'
            type='text'
            fullWidth
            validate={validateRequiredField}
          />
          <Field
            component={Autocomplete}
            name='coffeeDose'
            options={coffeeDoses}
            fullWidth
            filterOptions={filterAutocompleteFieldOptionsForRemovingDuplicates}
            renderInput={params => (
              <MaterialTextField
                {...params}
                type='text'
                label='Coffee dose'
              />
            )}
          />
          <Field
            component={Autocomplete}
            name='preinfusionDose'
            options={preinfusionDoses}
            fullWidth
            filterOptions={filterAutocompleteFieldOptionsForRemovingDuplicates}
            renderInput={params => (
              <MaterialTextField
                {...params}
                type='text'
                label='Preinfusion Dose'
              />
            )}
          />
          <Field
            component={TextField}
            name='preinfusionTime'
            label='Preinfusion Time'
            fullWidth
            type='number'
          />
          <Field
            component={TextField}
            name='waterDose'
            label='Water dose'
            fullWidth
            type='number'
          />
          <Field
            component={TextField}
            name='brewTime'
            label='Brew time'
            fullWidth
            type='number'
          />

          <Rate name='rating' rate={values['rating']} setRate={e => setFieldValue('rating', e)} editable={true}/>

          <Button type='submit'>Add</Button>
        </Form>
      )}
    </Formik>
  )
}


export default AddRating