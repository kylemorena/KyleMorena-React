export const searching = (books) => {
  return {
    type: 'SEARCHING',
    payload: books
  }
}
export const resetData = (books) => {
  return {
    type: 'RESETDATA',
    payload: books
  }
}