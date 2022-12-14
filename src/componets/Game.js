import React, {useState} from "react";
import { Board } from "./Board"; 
import { calculateWinner  } from "../untils/utils";    



export const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };


    const pStyle = {

        color: 'green',
        fontFamily: 'Helvetica',
        fontSize: '24pt'

    }

   return (
        <>
         <Board squares={board} onClick={handleClick}/>

         <div>  
            <p style={pStyle}>{ winner?  winner+ ' won!!! ': (xIsNext? 'X': 'O') + "'s  turn" }</p>
         </div>
        </>
   )
}