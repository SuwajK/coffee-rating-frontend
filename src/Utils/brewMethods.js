const methods = [
  {value: 1, label: 'Aeropress'},
  {value: 2, label: 'Espresso Machine'},
  {value: 3, label: 'Frenchpress'},
]

const getBrewMethods = () => methods

const getBrewMethodById = (id) => methods.find(
  // Compare as strings or as numbers.
  method => {return method.value+'' === id || method.value === id}
  )

export {
  getBrewMethods,
  getBrewMethodById,
}