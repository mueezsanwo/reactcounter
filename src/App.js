import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';


export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {setCount(count + 1)};
  let decrementCount = () => {setCount(count - 1)};
  let resetCount = () => {setCount(0)};

  return (
    <div className='App'>
      <Header />
      <div>
        <div className='count'>
          <h3>Count:</h3>
          <h1 id='counter-value'>{count}</h1>
        </div>
        <div className='buttons'>
          <Button className='button1' id='increase-button' title={'+'} action={incrementCount} />
          <Button className='button2' id='decrease-button' title={'-'} action={decrementCount} /><br></br>
          <Button className='button3' id='reset-button' title={'Reset'} action={resetCount} />
        </div>
      </div>
    </div>
  )
}

