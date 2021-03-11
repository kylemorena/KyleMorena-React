const dataReducer = (state = {} , action) =>{
  switch(action.type){
    case 'SEARCH': 
      return state = {
        title: 'ciao'
      };
    default:
      return state;
  }
}
export default dataReducer;