import Config from '../Config'

//Fetch only response body (removes headers)
const callApi = async (url, method, requestBody) => {
  let body = (requestBody) ? JSON.stringify(requestBody) : null
  return await fetch(url, {
    method: method,
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body
  })
    .then(resp => {
      if (resp.ok) {
        return resp.text()
      } else {
        throw Error('Call api error')
      }
    })
    .then(resp => resp.length ? JSON.parse(resp) : {})
    .catch(err => console.error('Fetch error: ', err))
}
const getDataFromApi = (nodeURL) => {
  return callApi(`${Config.apiUrl}/${nodeURL}`, 'GET', null)
}

const sendDataToApi = (nodeURL, data) => {
  if (data) {
    return callApi(`${Config.apiUrl}/${nodeURL}`, 'POST', data)
  }
}

const deleteDataInApi = (nodeURL, itemId) => {
  if (itemId) {
    return callApi(`${Config.apiUrl}/${nodeURL}/${itemId}`, 'DELETE', null)
  }
}

const sendRatingToApi = async (rating) => {
  return sendDataToApi('ratings', rating)
}

const getRatingDataFromApi = async () => {
  return getDataFromApi('ratings')
}

const deleteRatingInApiById = async (ratingId) => {
  return deleteDataInApi('ratings', ratingId)
}

const getCoffeeDataFromApi = async () => {
  return getDataFromApi('coffees')
}

const sendCoffeeDataToApi = async (coffee) => {
  return sendDataToApi('coffees', coffee)
}

const deleteCoffeeInApiById = async (coffeeId) => {
  return deleteDataInApi('coffees', coffeeId)
}

const getCoffeeMachineDataFromApi = async () => {
  return getDataFromApi('coffeemachines')
}

const sendCoffeeMachineDataToApi = async (coffeeMachine) => {
  return sendDataToApi('coffeemachines', coffeeMachine)
}

const deleteCoffeeMachineInApiById = async (coffeeMachineId) => {
  return deleteDataInApi('coffeemachines', coffeeMachineId)
}

const getGrinderDataFromApi = async () => {
  return getDataFromApi('grinders')
}

const sendGrinderDataToApi = async (grinder) => {
  return sendDataToApi('grinders', grinder)
}

const deleteGrinderInApiById = async (grinderId) => {
  return deleteDataInApi('grinders', grinderId)
}

const getBrewMethodsFromApi = async () => {
  return getDataFromApi('methods')
}

export {
  sendRatingToApi,
  getRatingDataFromApi,
  deleteRatingInApiById,
  getCoffeeDataFromApi,
  sendCoffeeDataToApi,
  deleteCoffeeInApiById,
  getCoffeeMachineDataFromApi,
  sendCoffeeMachineDataToApi,
  deleteCoffeeMachineInApiById,
  getGrinderDataFromApi,
  sendGrinderDataToApi,
  deleteGrinderInApiById,
  getBrewMethodsFromApi,
}