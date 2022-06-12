import React, {useState} from 'react';
import Column from './Column'

const Field = (props) => {
    const minesArray = props.mines.map(x => x.bomb);
    const classArray = props.mines.map(x => x.open);
    const flagArray = props.mines.map(x => x.flag);

    const columnsArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const numberElInColumn = minesArray.length / columnsArray.length;

    return (
        <div className='field'>
            {columnsArray.map(
                (columns)=><Column
                    key={columns}
                    openCell={props.openCell}
                    addFlag={props.addFlag}
                    columnNumber={columns}
                    flagInColumn = {flagArray.slice(numberElInColumn * columns- numberElInColumn, numberElInColumn * columns)}
                    arrayInColumn = {minesArray.slice(numberElInColumn * columns- numberElInColumn, numberElInColumn * columns)}
                    classInColumn = {classArray.slice(numberElInColumn * columns- numberElInColumn, numberElInColumn * columns)}
                ></Column>)}
        </div>
    )
}

export default Field;