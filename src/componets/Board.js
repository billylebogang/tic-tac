import React from "react";
import { Square } from "./Square"


const style = {
	borderRadius: "10px",
	width: "250px",
	height: "250px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
};

export const Board = ({squares, onClick }) =>{

    return (
        <>
        <div style={style}>

            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        
        </div>
        </>
    )
}