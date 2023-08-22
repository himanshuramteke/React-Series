import { useState } from 'react'

import './App.css'

function App() {
 
let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20){
      setCounter(counter + 1)
    }
   
  }
  const removeValue = () => {
   if (counter > 0){
      setCounter(counter - 1)
   }
  }
  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
       <h1>Chai aur react</h1>
       <h2>Counter Value: {counter}</h2>

       <button onClick={addValue}>Increment Value</button>
       <br />
       <button onClick={removeValue}>Decrement Value</button>
       <br />
       <button onClick={resetValue}>Reset</button>
    </>
  )
}

export default App
