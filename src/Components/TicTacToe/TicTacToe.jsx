import './TicTacToe.css'
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'
import { useRef, useState } from 'react';

let data = ["","","","","","","","",""];

const TicTacToe = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState (false);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count%2 === 0) {
      e.target.innerHTML = `<img src=${cross} >`;
      data[num]="x";
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img src=${circle} >`;
      data[num]="o";
      setCount(++count);
    }
    checkWin();
  }

  const checkWin = () => {
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      won(data[2]);
    }else if (data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      won(data[5]);
    }else if (data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      won(data[8]);
    }else if (data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      won(data[6]);
    }else if (data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      won(data[7]);
    }else if (data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      won(data[8]);
    }else if (data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      won(data[8]);
    }else if (data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      won(data[6]);
    }
  }

  const won = (winner) => {
    setLock(true);
    if(winner==="x"){
      titleRef.current.innerHTML = `Congratulations: <img src=${cross} > wins`;
    }else{
      titleRef.current.innerHTML = `Congratulations: <img src=${circle} > wins`;
    }
  }

  return (
    <div className='container'>
      <div className="header">
        <h1 ref={titleRef}>Tic Tac Toe Game in <span>React</span></h1>
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
