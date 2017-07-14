import { connect } from 'react-redux'
import { move } from '../actions'
import Game from '../components/Game'


const mapStateToProps = (state, ownProps) => {

  const game = state.game;
  const history = game.history.slice(0, game.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  squares[game.squareId] = game.xIsNext ? 'X' : 'O';

  return ({
    game: {
      xIsNext: !game.xIsNext,
      stepNumber: history.length,
      history: history.concat([{
        squares: squares,
      }])
    }
  })

}

const mapDispatchToProps = ({
  onClick: move
})


const TicTacToe = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default TicTacToe
