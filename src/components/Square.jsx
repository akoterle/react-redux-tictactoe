import React from 'react';
import ReactDOM from 'react-dom';

const Square = ({value, onClick}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
