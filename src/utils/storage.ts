const getStore = (key: string) => {
  return sessionStorage.getItem(key)
}
const setStore = (key: string, value: unknown) => {
  if (typeof value === 'object') {
    return sessionStorage.setItem(key, JSON.stringify(value))
  } else {
    return sessionStorage.setItem(key, value as string);
  }
}
const removeStore = (key: string) => {
  return sessionStorage.removeItem(key)
}
const removeAll = () => {
  return sessionStorage.clear()
}
export {
  getStore,
  setStore,
  removeStore,
  removeAll
}