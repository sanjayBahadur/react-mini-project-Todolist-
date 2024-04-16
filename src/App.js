import "./App.css";
import { useEffect, useState } from "react";
import TodoInput from "./Components/TodoInput/TodoInput";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(()=>{console.log(todo)},[todo])

  return (
    <div className="App">
      <TodoInput todo={todo} setTodo={setTodo} />
      <div className="container">
        <div className="row">
        <div className="col">
        </div>
        <div className="col"></div>
        </div>
        

      </div>
    </div>
  );
}

export default App;
