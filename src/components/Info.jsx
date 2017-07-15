import React from 'react'

const Info = ({ history, winner, nextPlayer, onClick }) => {

    const moves = history.map((step, move) => {
        const desc = move ?
            'Move #' + move :
            'Game start';
        return (
            <li key={move}>
                <a href="#" onClick={() => onClick(move)}>{desc}</a>
            </li>
        );
    });

    return (
        <div className="game-info">
            <div>{winner ? "The winner is:" + winner : "Next player is: " + nextPlayer}</div>
            <ol>{moves}</ol>
        </div>
    )
}

export default Info
