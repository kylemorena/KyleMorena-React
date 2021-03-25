export const Searching = (books) => {
  return {
    type: 'SEARCHING',
    payload: books
  }
}
export const ResetData = (books) => {
  return {
    type: 'RESETDATA',
    payload: books
  }
}