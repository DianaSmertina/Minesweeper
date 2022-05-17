import React from 'react';
import logo from '../bomb.svg';

const FlagCounter = () => {
    let flagCounter = 10;
    return (
        <span>
            <img src={logo} className="bomb-counter-logo" alt="bomb" />
            <span>
                {flagCounter}
            </span>
        </span>
    )
}

export default FlagCounter;