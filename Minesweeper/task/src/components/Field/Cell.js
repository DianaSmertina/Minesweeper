import React from 'react';
import { useState } from 'react';
import bomb from "../bomb.svg";
import flagPicture from "../flag1.png";

const Cell = (props) => {

    const onCellClick = () => {
        props.openCell(props.rowNumber)
    };


    const addFlag = (event) => {
        event.preventDefault();
        props.addFlag(props.rowNumber);
    };

    return (<div className={props.classInCell} onContextMenu={addFlag} onClick={onCellClick} >
        {props.minesInCell}
        {props.flagInCell}
    </div>)
}

export default Cell;
