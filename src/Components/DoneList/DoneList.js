import React from "react";
import TodoCard from "../TodoCard/TodoCard";

const DoneList = ({dones, setDone}) => {
    const cardGenerator = () => {
        if (!dones || dones.length === 0) {
          return <div className="text-muted">No tasks done yet..</div>;
        } else {
          return dones.map((done, index) => {
            return (
              <TodoCard
                id={index}
                key={`done-"${index}`}
                task={done}
                handleDelete={handleDelete}
                isDone={true}
              />
            );
          });
        }
      };
    
      const handleDelete = (indexToDelete) => {
        const updatedDones = dones.filter((_, index) => index !== indexToDelete);
        setDone([...updatedDones]);
      };
    
      return <>
      <div className="fs-3 mb-2">Task Done</div>{cardGenerator()}</>;
};

export default DoneList;
