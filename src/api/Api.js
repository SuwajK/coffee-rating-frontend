import Config from '../Config'

const sendRatingToApi = async (rating) => {
  if (rating) {
    const response = fetch(
      `${Config.apiUrl}/ratings`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(rating),
      })
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        throw Error('Error adding rating')
      })
      .catch(err => console.error(err))
    return response
  }
}

const getRatingDataFromApi = async () => {
  const response = await fetch(`${Config.apiUrl}/ratings`, {
    method: 'GET',
    mode: 'cors',
    headers: {'Content-Type': 'application/json',},
  })
    .then(resp => resp.json())
    .catch(err => console.error('Fetch error: ', err))
  return response
}

const deleteRatingInApiById = async (ratingId) => {
  if (ratingId) {
    fetch(
      `${Config.apiUrl}/ratings/${ratingId}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {'Content-Type': 'application/json',},
      })
      .then(resp => {
        if (!resp.ok) {
          throw Error('Error deleting rating')
        }
      })
      .catch(err => console.error(err))
  }
}

const getCoffeeDataFromApi = async () => {
  const response = await fetch(`${Config.apiUrl}/coffees`, {
    method: 'GET',
    mode: 'cors',
    headers: {'Content-Type': 'application/json',},
  })
    .then(resp => resp.json())
    .catch(err => console.error('Fetch error: ', err))
  return response
}

const sendCoffeeDataToApi = async (coffee) => {
  if (coffee) {
    const response = fetch(
      `${Config.apiUrl}/coffees`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(coffee),
      })
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        throw Error('Error adding coffee')
      })
      .catch(err => console.error(err))
    return response
  }
}

const deleteCoffeeInApiById = async (coffeeId) => {
  if (coffeeId) {
    fetch(
      `${Config.apiUrl}/coffees/${coffeeId}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {'Content-Type': 'application/json',},
      })
      .then(resp => {
        if (!resp.ok) {
          throw Error('Error deleting coffee')
        }
      })
      .catch(err => console.error(err))
  }
}

const getCoffeeMachineDataFromApi = async () => {
  const response = await fetch(`${Config.apiUrl}/coffeemachines`, {
    method: 'GET',
    mode: 'cors',
    headers: {'Content-Type': 'application/json',},
  })
    .then(resp => resp.json())
    .catch(err => console.error('Fetch error: ', err))
  return response
}

const sendCoffeeMachineDataToApi = async (coffee) => {
  if (coffee) {
    const response = fetch(
      `${Config.apiUrl}/coffeemachines`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(coffee),
      })
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        throw Error('Error adding coffee')
      })
      .catch(err => console.error(err))
    return response
  }
}

const getGrinderDataFromApi = async () => {
  const response = await fetch(`${Config.apiUrl}/grinders`, {
    method: 'GET',
    mode: 'cors',
    headers: {'Content-Type': 'application/json',},
  })
    .then(resp => resp.json())
    .catch(err => console.error('Fetch error: ', err))
  return response
}

const sendGrinderDataToApi = async (grinder) => {
  if (grinder) {
    const response = fetch(
      `${Config.apiUrl}/grinders`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(grinder),
      })
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        throw Error('Error adding grinder')
      })
      .catch(err => console.error(err))
    return response
  }
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
  getGrinderDataFromApi,
  sendGrinderDataToApi,
}