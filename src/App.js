import "./App.css";
import { useEffect, useState } from "react";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import DoneList from "./Components/DoneList/DoneList";

function App() {
  const [todo, setTodo] = useState([]);
  const [doneList, setDone] = useState([]);

  useEffect(() => {
    console.log(doneList);
  }, [doneList]);

  return (
    <div className="App">
      <TodoInput todo={todo} setTodo={setTodo} />
      <div className="container mt-5 mx-auto w-75">
        <div className="row mt-4">
          <div className="col">
            <TodoList todos={todo} setTodo={setTodo} setDone={setDone} doneList={doneList} />
          </div>
          <div className="col">
            <DoneList dones={doneList} setDone={setDone}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
