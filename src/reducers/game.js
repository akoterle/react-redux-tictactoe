const initialState = {
  xIsNext: true,
  stepNumber: 0,
  history: [{
    squares: Array(9).fill(null),
  }]
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE': {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      // if (calculateWinner(squares) || squares[i]) {
      //   return;
      // }
      squares[action.squareId] = state.xIsNext ? 'X' : 'O';
      return {
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      }
    }
    default:
      return state
  }
}

export default game