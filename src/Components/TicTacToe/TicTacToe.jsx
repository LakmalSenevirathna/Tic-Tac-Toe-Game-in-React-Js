import './TicTacToe.css'
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'
import { useState } from 'react';

let data = ["","","","","","","","",""];

const TicTacToe = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState (false);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count%2 === 0) {
      e.target.innerHTML = `<img src=${cross} >`;
      data[num]="X";
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img src=${circle} >`;
      data[num]="O";
      setCount(++count);
    }
  }

  return (
    <div className='container'>
      <div className="header">
        <h1>Tic Tac Toe Game in <span>React</span></h1>
      </div>
      <div className="game__container">
        <div className="row__1">
          <div className="box" onClick={(e) => {toggle(e,0)}} ></div>
          <div className="box" onClick={(e) => {toggle(e,1)}}></div>
          <div className="box" onClick={(e) => {toggle(e,2)}}></div>
        </div>
        <div className="row__2">
          <div className="box" onClick={(e) => {toggle(e,3)}}></div>
          <div className="box" onClick={(e) => {toggle(e,4)}}></div>
          <div className="box" onClick={(e) => {toggle(e,5)}}></div>
        </div>
        <div className="row__3">
          <div className="box" onClick={(e) => {toggle(e,6)}}></div>
          <div className="box" onClick={(e) => {toggle(e,7)}}></div>
          <div className="box" onClick={(e) => {toggle(e,8)}}></div>
        </div>
      </div>
      <div className="reset__container">
        <button className="reset__button">Reset</button>
      </div>
    </div>
  )
}

export default TicTacToe
