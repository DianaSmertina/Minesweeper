import React from 'react';
import FlagCounter from "./Flag-counter";
import Reset from "./Reset";
import Timer from "./Timer";

const ControlPanel = () => {
    return (
        <div className='control-panel'>
            <FlagCounter />
            <Reset />
            <Timer />
        </div>
    )
}

export default ControlPanel;