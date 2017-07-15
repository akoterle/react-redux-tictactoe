const initialState = {
  xIsNext: true,
  winner: null,
  current: 0,
  history: [{
    squares: Array(9).fill(null),
  }]
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE':
      return updateGameState({ ...state }, action.move)
    case 'BROWSE': 
      return backToGameState({ ...state }, action.step)
    default:
      return state
  }
}

function updateGameState(state, moveId) {
  const history = state.history.slice(0, state.current + 1);
  const game_at = history[history.length - 1];
  const squares = game_at.squares.slice();
  const winner = calculateWinner(squares);
  if (squares[moveId] || winner)
    return { ...state, winner: winner }
  squares[moveId] = state.xIsNext ? 'X' : 'O';
  return {
    history: history.concat([{
      squares: squares,
    }]),
    current: history.length,
    xIsNext: !state.xIsNext,
    winner: calculateWinner(squares)
  }

}

function backToGameState(state, step) {
  const current = state.history[step];
  const winner = calculateWinner(current.squares);
  return ({
    history: state.history,
    current: step,
    xIsNext: (step % 2) === 0,
    winner: winner
  })
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default game