import React from 'react'
import { render} from '@testing-library/react'
import FormikRadioGroup from "./FormikRadioGroup";
import {Field, Form, Formik} from "formik";

it('renders options label', async () => {
  const options = [{value: '1', label: 'LABEL'}]
  const {getByText} = render(<Formik initialValues={{TEST_NAME: 0}} onSubmit={()=>{}}>
      <Form>
        <Field
          component={FormikRadioGroup}
          options={options}
          name={"TEST_NAME"}
        />
      </Form>
    </Formik>
  )
  expect(getByText('LABEL')).toBeInTheDocument()
})

it('renders proper amount of options', async () => {
  const options = [
    {value: '1', label: 'LABEL1'},
    {value: '2', label: 'LABEL2'},
    {value: '3', label: 'LABEL3'},
    {value: '4', label: 'LABEL4'},
    {value: '5', label: 'LABEL5'},
  ]
  const {getAllByRole} = render(<Formik initialValues={{TEST_NAME: 0}} onSubmit={()=>{}}>
    <Form>
      <Field
        component={FormikRadioGroup}
        options={options}
        name={"TEST_NAME"}
      />
    </Form>
  </Formik>
  )

  const radioControls = getAllByRole('radio')
  expect(radioControls.length).toBe(5)

})