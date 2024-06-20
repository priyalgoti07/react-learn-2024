import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  let Couter = 15

  const addValue = () => {
    console.log("i am addValue", Math.random());
    if (counter < 20)
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
    setCounter(prevcounter => prevcounter + 1);
    setCounter(prevcounter => prevcounter + 1);
    setCounter(prevcounter => prevcounter + 1);
    setCounter(prevcounter => prevcounter + 1);
    setCounter(prevcounter => prevcounter + 1);
  }

  const removeValue = () => {
    if (counter > 0)
      setCounter(counter - 1);
  }
  return (
    <>
      <h1>Learn to React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
