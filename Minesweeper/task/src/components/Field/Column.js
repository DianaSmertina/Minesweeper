import React from 'react';
import Cell from "./Cell";
import column from "./Column";

const Column = (props) => {
    const cellsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const openCell = (rowNumber) => {
        props.openCell((props.columnNumber-1)*9+rowNumber-1);
    };

    const addFlag = (rowNumber) => {
        props.addFlag((props.columnNumber-1)*9+rowNumber-1);
    };
    return (
        <div className='row'>
            {cellsArray.map((cell)=><Cell
                key={cell}
                openCell={openCell}
                addFlag={addFlag}
                rowNumber={cell}
                minesInCell = {props.arrayInColumn[cell-1]}
                classInCell = {props.classInColumn[cell-1]}
                flagInCell = {props.flagInColumn[cell-1]}
            ></Cell>)}
        </div>
    )
}

export default Column;
