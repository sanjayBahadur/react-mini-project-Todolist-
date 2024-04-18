import React from "react";
import TodoCard from "../TodoCard/TodoCard";

const DoneList = ({dones, setDone}) => {
    const cardGenerator = () => {
        if (!dones || dones.length === 0) {
          return <div>No tasks done yet...</div>;
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
    
      return <>{cardGenerator()}</>;
};

export default DoneList;
