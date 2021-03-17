export const searching = (books) => {
  return {
    type: 'SEARCHING',
    payload: books
  }
}
export const noTyping = (books) => {
  return {
    type: 'NO-TYPING',
    payload: books
  }
}