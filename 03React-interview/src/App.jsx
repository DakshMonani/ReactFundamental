import { useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0)
  const addValue = ()=>{
    setCounter(prevCounter => prevCounter+1);
     setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
       setCounter(prevCounter => prevCounter+1);
  }
  const decreaseValue = () =>{
    setCounter(prevCounter => prevCounter-1);
     setCounter(prevCounter => prevCounter-1);
      setCounter(prevCounter => prevCounter-1);
  }

  return (
    <>
      <h3>Counter</h3>
      <button onClick={addValue}>add counter : {counter}</button>
       <button onClick={decreaseValue}>decrease counter : {counter}</button>
    </>
  )
}

export default App
