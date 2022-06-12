import React from 'react';
import logo from '../bomb.svg';

const FlagCounter = (props) => {
    let flagCounter = 10;

    for (let i = 0; i < 72; i++) {
        if (props.mines[i].flag !== false && props.mines[i].flag != null) {
           flagCounter = flagCounter - 1;
        }
    }

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