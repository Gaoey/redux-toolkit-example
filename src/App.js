import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { increment, decrement } from './store/counterStore2'
import slice from './store/counterStore3'
import './App.css';
import App2 from './App2'

function App() {
  const dispatch = useDispatch()
  // const state = useSelector(state => state)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <App2 />
        </p>
        <span>
          <button onClick={() => dispatch(slice.actions.increment())}>PLUS</button>
          <button onClick={() => dispatch(slice.actions.decrement())}>MINUS</button>
        </span>
      </header>
    </div>
  );
}

export default App;
