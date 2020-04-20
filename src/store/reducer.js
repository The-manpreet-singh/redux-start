const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState= Object.assign({}, state);
      newState.counter= state.counter +1;
      return newState;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({id: new Date() ,value: state.counter})
      } 
      case "DELETE_RESULT":
        // const id =2;
        // const newArray =[...state.results];
        // newArray.splice(id, 1)
        const updatedArray = state.results.filter(result => result.id !== action.resultEId)
        return {
          ...state,
          results: updatedArray 

        }   
  }

  /*  if (action.type === "INCREMENT") {
    return {
        counter: state.counter + 1
      }
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1
    };
  }
  if (action.type === "ADD") {
    return {
      counter: state.counter + action.val
    };
  }
  if (action.type === "SUBTRACT") {
    return {
      counter: state.counter - action.val
    };
  } */
  return state;
};

export default reducer;
