import './TicTacToe.css'

const TicTacToe = () => {
  return (
    <div className='container'>
      <div className="header">
        <h1>Tic Tac Toe Game in <span>React</span></h1>
      </div>
      <div className="game__container">
        <div className="row__1">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="row__2">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="row__3">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      <div className="reset__container">
        <button className="reset__button">Reset</button>
      </div>
    </div>
  )
}

export default TicTacToe
