import React, { useState } from "react";
import Square from "./Square";
import { Container, Table, Alert } from "react-bootstrap";

const Board = () => {
  const [boardSquares, setBoardSqaures] = useState(Array(9).fill(null));

  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (index) => {
    const squares = [...boardSquares];
    // index if filled, return
    if (squares[index] || calculateWinner(boardSquares)) return;

    squares[index] = xIsNext ? "X" : "O";

    setBoardSqaures(squares);
    setXisNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <Square onClick={() => handleClick(index)} value={boardSquares[index]} />
    );
  };
  const winner = calculateWinner(boardSquares);
  let status;
  status = winner ? (
    <Alert variant="success">Winner is {winner}</Alert>
  ) : (
    <h1>Next Player: {xIsNext ? "X" : "O"}</h1>
  );

  return (
    <>
      <Container>
      {status}
        <Table striped bordered>
          <tbody>
            <tr>
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </tr>
            <tr>
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </tr>
            <tr>
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Board;

function calculateWinner(squares) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
