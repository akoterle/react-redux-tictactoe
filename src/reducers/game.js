const initialState = {
  xIsNext: true,
  stepNumber: 0,
  history: [{
    squares: Array(9).fill(null),
  }]
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE': 
      return { ...state, squareId: action.squareId }
    default:
      return state
  }
}

export default game