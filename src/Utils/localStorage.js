export const saveToLocalStorage = (key, data) => {
  try {
    const serializedData = JSON.stringify(data)
    localStorage.setItem(key, serializedData)
  } catch (err) {
    console.error(`saveToLocalStorage: ${err}`)
  }
}

export const loadFromLocalStorage = (key) => {
  try {
    const serializedData = localStorage.getItem(key)
    if (serializedData === null) {
      return undefined
    }
    return JSON.parse(serializedData)
  } catch (err) {
    console.error(`loadFromLocalStorage: ${err}`)
    return undefined
  }
}