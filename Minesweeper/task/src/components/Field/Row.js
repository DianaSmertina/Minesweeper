import React from 'react';
import Cell from './Cell'

const Row = () => {
    const cellsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className='row'>
            {cellsArray.map((cell)=><Cell key={cell}></Cell>)}
        </div>
    )
}

export default Row;
