import React from 'react'
import {act, render} from '@testing-library/react'
import CoffeeEquipment from "./CoffeeEquipment";
import {fireEvent, wait, waitForElement} from "@testing-library/dom";

it("renders component", async () => {
  const {getByText} = render(<CoffeeEquipment/>)
  expect(getByText('ID')).toBeInTheDocument()
})

it("renders component formName from props", async () => {
  const formName = 'TEST_NAME'
  const {getByText} = render(<CoffeeEquipment formName={formName}/>)
  expect(getByText(formName)).toBeInTheDocument()
})

it("renders component data from props", async () => {
  const data = [
    {id: 1, brand: 'TEST_BRAND1', name: 'TEST_NAME1'},
    {id: 2, brand: 'TEST_BRAND2', name: 'TEST_NAME2'},
  ]
  const {getByText} = render(<CoffeeEquipment data={data}/>)

  expect(getByText(data[0].brand)).toBeInTheDocument()
  expect(getByText(data[0].name)).toBeInTheDocument()
  expect(getByText(data[1].brand)).toBeInTheDocument()
  expect(getByText(data[1].name)).toBeInTheDocument()
})

// it("checks required validator on brand field", async () => {
//   const {find,getByText} = render(<CoffeeEquipment/>)
//   const bandInput = find({name: 'brand'})
//
//   fireEvent.change(bandInput, {target: {value: 'some text'}})
//   fireEvent.change(bandInput, {target: {value: null}})
//
//   expect(getByText('This field is required')).toBeInTheDocument()
// })

// it("checks required validator on name field", async () => {
//   const {getByText, container} = render(<CoffeeEquipment/>)
//   const nameInput = container.querySelector('input[name="name"]')
//
//   await wait (() =>
//     fireEvent.change(nameInput, {target: {value: 'some text'}})
//   )
//   await wait (() =>
//     fireEvent.change(nameInput, {target: {value: null}})
//   )
//   await wait (() =>
//     expect(getByText('This field is required')).toBeInTheDocument()
//   )
// })

it("checks if sumbitFunction is called when form is filled", async () => {
  const submitFunctionMock = jest.fn()
  const {container} = render(
    <CoffeeEquipment submitFunction={submitFunctionMock}/>
  )

  const nameInput = container.querySelector('input[name="name"]')
  const brandInput = container.querySelector('input[name="brand"]')
  const formControl = container.querySelector('form')

  await wait(() => {
    fireEvent.change(nameInput, {target: {value: 'some text'}})
    fireEvent.change(brandInput, {target: {value: 'some text'}})
  })

  await wait(() =>
    fireEvent.submit(formControl)
  )

  expect(submitFunctionMock.mock.calls.length).toBe(1)
})

it("checks if sumbitFunction is not called when brand is empty", async () => {

  const submitFunctionMock = jest.fn()
  const {container} = render(
    <CoffeeEquipment submitFunction={submitFunctionMock}/>
  )

  const nameInput = container.querySelector('input[name="name"]')
  const formControl = container.querySelector('form')

  await wait(() => {
    fireEvent.change(nameInput, {target: {value: 'some text'}})
    fireEvent.submit(formControl)
  })

  expect(submitFunctionMock.mock.calls.length).toBe(0)
})

it("checks if sumbitFunction is not called when name is empty", async () => {

  const submitFunctionMock = jest.fn()
  const {container} = render(
    <CoffeeEquipment submitFunction={submitFunctionMock}/>
  )

  const brandInput = container.querySelector('input[name="brand"]')
  const formControl = container.querySelector('form')

  await wait(() => {
    fireEvent.change(brandInput, {target: {value: 'some text'}})
    fireEvent.submit(formControl)
  })

  expect(submitFunctionMock.mock.calls.length).toBe(0)
})

