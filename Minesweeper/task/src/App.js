import React from 'react';
import './App.css';
import Field from './components/Field/Field'
import ControlPanel from "./components/Control-panel/Control-panel";

function App() {
    return (
    <div className='App'>
        <ControlPanel />
        <Field />
    </div>
    )
}

export default App;