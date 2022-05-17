import React from 'react';
import logo from './bomb.svg';

const Loading = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <br></br>
                    <br></br>
                    Minesweeper is loading...
            </header>
        </div>
    );
}

export default Loading;