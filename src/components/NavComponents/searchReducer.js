const searchReducer = (state= {}, action) => { 
  switch (action.type){
    case 'SEARCHING':
      return state;
    default:
      return state;
  }
};
export default searchReducer();