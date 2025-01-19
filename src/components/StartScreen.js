import React, {useState} from "react";
import "./game/style.css";


function StartScreen() {
    const [showScreen, setShowScreen] = useState(true);

    const handleClick = () => {
        setShowScreen(false);
    };

    return (
        <div className="StartHolder">
            {showScreen && <div className="StartScreen" id="showScreen">
                <button className="startButton" onClick={handleClick}>START</button>
            </div>}
        </div>);
}

export default StartScreen;