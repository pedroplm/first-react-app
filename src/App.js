
import react, {useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
     <h1>Count App</h1>
     <h2>{counter}</h2>
     <button onClick = {() => {
      setCounter(number => number + 1)
     }}>+</button>
     <button onClick = {() => {
      setCounter(number => number - 1)
     }}>-</button>
    </div>
  );
}

export default App;
