import React from 'react';
import Row from './Row'

const Field = () => {
    const rowsArray = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className='field'>
            {rowsArray.map((rows)=><Row key={rows}></Row>)}
        </div>
    )
}

export default Field;