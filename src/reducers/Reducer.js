const reducer = (state, action) => {
  switch(action.type){
    case 'SEARCHING':
      return state = {
        books: action.payload,
        isOpen: true
      }
    case 'NO-TYPING':
      return state = {
        books: [],
        isOpen:false
      }
    case 'DETAIL_BOOK':
      return state = action.payload
    default:
      throw new Error ('nessun match')
  }
}
export default reducer;