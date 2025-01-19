import React from "react";
import "./style.css"

function Player() {

    const [positionX, setPositionX] = React.useState(50);
    const [positionY, setPositionY] = React.useState(50);
    const [playerImage, setPlayerImage] = React.useState("%PUBLIC_URL%/placeholder.png");

    const handleClick = (event) => {
        setPositionX(event.clientX);
        setPositionY(event.clientY);
    };

    return (
        <div className="playerContainer" onClick={handleClick}>
            <img className="player"
                   style={{
                       position: "absolute",
                       left: positionX,
                       top: positionY,
                   height: "5vmin", width: "5vmin"}}
            src={playerImage} />
        </div>

    );
}

export default Player;