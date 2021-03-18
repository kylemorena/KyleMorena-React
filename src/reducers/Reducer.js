const reducer = (state, action) => {
  switch(action.type){
    case 'SEARCHING':
      return state = {
        books: action.payload,
        isOpen: true
      }
    case 'RESETDATA':
      return state = {
        books: [],
        isOpen:false
      }
    default:
      throw new Error ('nessun match')
  }
}
export default reducer;