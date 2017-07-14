import { connect } from 'react-redux'
import { move } from '../actions'
import Game from '../components/Game'


const mapStateToProps = (state) => ({
  current: state.game.history[state.game.history.length - 1]
})


const mapDispatchToProps = ({
  onClick: move
})


const TicTacToe = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default TicTacToe
