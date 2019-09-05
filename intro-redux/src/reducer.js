//put CountUp and CountDown here 

//count reducer will be here 
const initialState = {
  count: 0
}

const Count = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 }
    case "DEC":
      return { ...state, count: state.count - 1 }
    default:
      return { ...state }
  }
}





export default Count