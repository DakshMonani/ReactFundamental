import { useState } from 'react';
import './App.css'

function App() {
 const [counter,setCounter] = useState(15);
 const [message, setMessage] = useState('');

  const addValue = () => {
    if (counter >= 20) {
      setCounter(0);
      setMessage('Counter reset to 0 after reaching 20');
    } else {
      setCounter(counter + 1);
      setMessage('');
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      setMessage('Counter cannot go below 0');
    } else {
      setCounter(counter - 1);
      setMessage('');
    }
  };

return(
  <>
  <h3>Counter Value : {counter}</h3>
  {message && <p style={{ color: 'red' }}>{message}</p>}
 <button onClick={addValue} id='add'>AddValue {counter}</button>
 <br />
 <button onClick={removeValue} id='remove'>removeValue {counter}</button>
 </>
);
}

export default App
