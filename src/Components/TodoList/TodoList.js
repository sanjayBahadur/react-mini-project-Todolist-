import React from "react";
import TodoCard from "../TodoCard/TodoCard";

const TodoList = ({ todos, setTodo, setDone, doneList }) => {
  const cardGenerator = () => {
    if (!todos || todos.length === 0) {
      return <div>Empty array</div>;
    } else {
      return todos.map((todo, index) => {
        return (
          <TodoCard
            id={index}
            key={`todo-"${index}`}
            task={todo}
            handleDelete={handleDelete}
            handleAdd={handleAdd}
            isDone={false}
          />
        );
      });
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedTodo = todos.filter((_, index) => index !== indexToDelete);
    setTodo([...updatedTodo]);
  };

  const handleAdd = (task, id, deleteTask) => {
    deleteTask(id)
    setDone([...doneList, task ])
    
  };

  return <>{cardGenerator()}</>;
};

export default TodoList;
