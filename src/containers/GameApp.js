import { connect } from 'react-redux'
import { move, browse } from '../actions'
import Game from '../components/Game'


const mapStateToProps = (state) => ({
  history: state.game.history,
  current: state.game.current,
  nextPlayer: state.game.xIsNext ? 'X' : 'O',
  winner: state.game.winner
})

const mapDispatchToProps = {
  onMove: move,
  onBrowse: browse
}

const GameApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameApp
