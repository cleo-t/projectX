import React from "react";
import "./style.css"
import Tile from "./Tile.js";

function Row() {
    return (
        <div className="Row">{Array.from({length: 7}).map((_, index_x) => (
            <Tile key={index_x}/>
        ))}</div>
    );
}

function Board() {
    return (
        <div className="Board">
            {Array.from({length: 7}).map((_, index_y) => (
            <Row key={index_y} />))}
        </div>
    );
}

export default Board;