import React from 'react';
import Board from './Board';
import Info from './Info';


const Game = ({ history, current, nextPlayer, winner, onMove, onBrowse }) => {
  const squares = history[current].squares
  return (
    <div className="game">
      <Board
        squares={squares}
        onMove={onMove}
      />
      <Info history={history} winner={winner} nextPlayer={nextPlayer} onClick={onBrowse}/>
    </div>
  )
}


export default Game
