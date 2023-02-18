import React from "react";
import { FaTimes } from "react-icons/fa";

const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    //タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((taskCard) => taskCard.id !== id));
  };

  return (
    <div className="">
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
