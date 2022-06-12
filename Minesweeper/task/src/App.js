import React, {useState} from 'react';
import './App.css';
import Field from './components/Field/Field'
import FlagCounter from "./components/Control-panel/Flag-counter";
import Reset from "./components/Control-panel/Reset";
import Timer from "./components/Control-panel/Timer";
import {min} from "mocha/lib/reporters";
import flagPicture from "./components/flag1.png";
import bomb from "./components/bomb.svg";


function App() {

    const [mines, setMines] = useState(new Array(72).fill({}));
    const countOfColumn = 9;
    const [time, setTime] = useState(0);
    let timer;
    function createMines() {
        const Mine = -200;
        const fieldArray = new Array(72).fill(0);
        for (let i  = 0; i < 10;) {
            let mineInArray = Math.floor(Math.random() * (Math.floor(71) - Math.ceil(0) + 1)) + Math.ceil(0);
            if (fieldArray[mineInArray] >= 0) {
                fieldArray[mineInArray] = Mine;

                switch (mineInArray) {
                    case 0:
                        fieldArray[mineInArray+1] += 1;
                        fieldArray[mineInArray+countOfColumn] += 1;
                        fieldArray[mineInArray+countOfColumn+1] += 1;
                        break;
                    case (countOfColumn-1): //левый нижний угол
                        fieldArray[mineInArray-1] += 1 ;
                        fieldArray[mineInArray+countOfColumn] += 1;
                        fieldArray[mineInArray+countOfColumn-1] += 1;
                        break;
                    case (fieldArray.length-countOfColumn): // правый верхний угол
                        fieldArray[mineInArray+1] += 1;
                        fieldArray[mineInArray-countOfColumn] += 1;
                        fieldArray[mineInArray-countOfColumn+1] += 1;
                        break;
                    case (fieldArray.length-1): //правй нижний угол
                        fieldArray[mineInArray-1] += 1;
                        fieldArray[mineInArray-countOfColumn] += 1;
                        fieldArray[mineInArray-countOfColumn-1] += 1;
                        break;
                    case (((mineInArray >= 1) && (mineInArray < countOfColumn-1)) ? mineInArray : true): //для первого столбца
                        fieldArray[mineInArray+1] += 1;
                        fieldArray[mineInArray-1] += 1;
                        fieldArray[mineInArray+countOfColumn-1] += 1;
                        fieldArray[mineInArray+countOfColumn+1] += 1;
                        fieldArray[mineInArray+countOfColumn] += 1;
                        break;
                    case ((mineInArray > (fieldArray.length-countOfColumn)) && (mineInArray < (fieldArray.length-1))) ? mineInArray : true: //для последнего столбца
                        fieldArray[mineInArray+1] += 1;
                        fieldArray[mineInArray-1] += 1;
                        fieldArray[mineInArray-countOfColumn-1] += 1;
                        fieldArray[mineInArray-countOfColumn+1] += 1;
                        fieldArray[mineInArray-countOfColumn] += 1;
                        break;
                    case (mineInArray % countOfColumn === 0 ? mineInArray : true): //для верхней строки
                        fieldArray[mineInArray+1] += 1; //10
                        fieldArray[mineInArray+countOfColumn+1] += 1; //19
                        fieldArray[mineInArray-countOfColumn+1] += 1; // 1
                        fieldArray[mineInArray-countOfColumn] += 1; // 0
                        fieldArray[mineInArray+countOfColumn] += 1; // 18
                        break;
                    case ((mineInArray + 1) % countOfColumn === 0 ? mineInArray : true): //для нижней строки
                        fieldArray[mineInArray-1] += 1; //16
                        fieldArray[mineInArray+countOfColumn-1] += 1; // 25
                        fieldArray[mineInArray-countOfColumn-1] += 1; // 7
                        fieldArray[mineInArray-countOfColumn] += 1; //8
                        fieldArray[mineInArray+countOfColumn] += 1; //26
                        break;
                    default:
                        fieldArray[mineInArray-1] += 1;
                        fieldArray[mineInArray+1] += 1;
                        fieldArray[mineInArray+countOfColumn-1] += 1;
                        fieldArray[mineInArray+countOfColumn+1] += 1;
                        fieldArray[mineInArray-countOfColumn-1] += 1;
                        fieldArray[mineInArray-countOfColumn+1] += 1;
                        fieldArray[mineInArray-countOfColumn] += 1;
                        fieldArray[mineInArray+countOfColumn] += 1;
                        break;
                };
                i = i + 1;
            };
        };
        setMines(fieldArray.map(x => ({bomb: x, flag: false, open: 'cell-none'})));

            let timePassed = 0;
            clearInterval(timer);
            timer = setInterval(() => {
                timePassed = timePassed + 1;
                if (time === 0) {
                setTime(timePassed)} else {
                    clearInterval(timer);
                    setTime(timePassed);
                }
                    }, 1000);
    };

    const flagPic = <img src={flagPicture} className="flag-logo" alt="flag" />;
    let flagCount = 0;
    function addFlag(number) {
        let tempBomb = mines[number].bomb;
        let tempOpen = mines[number].open;
        setMines((prev) => {
                const result = [...prev];
                if (result[number].flag === false && result[number].open === 'cell-none') {
                    result[number] = {bomb: tempBomb, flag: flagPic, open: tempOpen};
                } else {
                    result[number] = {bomb: tempBomb, flag: false, open: tempOpen};
                }
                return result;
            }
        );
    }

    const bombPic = <img src={bomb} className="bomb-counter-logo" alt="bomb" />;
    function openCell(number) {
        let tempBomb = mines[number].bomb;
        let tempFlag = mines[number].flag;
        setMines((prev) => {
            let result = [...prev];
            if (result[number].flag !== false) {
                return result;} else if (result[number].bomb > 0) {
                result[number] = {bomb: tempBomb, flag: tempFlag, open: 'cell'};
                return result;
                } else if (result[number].bomb === 0) {
                   const tempArr = [];
                   function createArr (x) {
                       if (x>=0 && x<72) {
                           if (result[x].open !== 'cell' && result[x].flag === false ) {
                           tempArr.push(x);}}
                   }

                   createArr(number);

                   while (tempArr.length) {
                       let newNumber = tempArr.pop();
                       tempBomb = mines[newNumber].bomb;
                       tempFlag = mines[newNumber].flag;
                       result[newNumber] = {bomb: tempBomb, flag: tempFlag, open: 'cell'};

                       if (result[newNumber].bomb !==0) continue;
                       if (newNumber%9 === 0) {
                           createArr(newNumber+1);
                           createArr(newNumber+countOfColumn);
                           createArr(newNumber-countOfColumn);
                       } else if ((newNumber+1)%9 === 0) {
                           createArr(newNumber-1);
                           createArr(newNumber+countOfColumn);
                           createArr(newNumber-countOfColumn);
                       } else {
                           createArr(newNumber+1);
                           createArr(newNumber-1);
                           createArr(newNumber+countOfColumn);
                           createArr(newNumber-countOfColumn);
                       }
                   }
                return result;
                } else {
                for (let i = 0; i < 72; i++) {
                    let newTempBomb = result[i].bomb;
                    if (newTempBomb < 0) {
                        result[i] = {bomb: bombPic, flag: false, open: 'cell'};
                    } else {
                        result[i] = {bomb: newTempBomb, flag: false, open: 'cell'};
                    }
                };
                return result;
                }
            }
        );
    }

    return (
        <div className='App'>
            <h1 className='App-header'>Minesweeper</h1>
                <div className='control-panel'>
                    <FlagCounter mines={mines}/>
                    <Reset startGame = {createMines} />
                    <Timer time = {time}/>
                </div>

            <Field openCell={openCell} addFlag={addFlag} mines={mines}/>
        </div>
    )
}

export default App;