import React from "react";
import { v4 as uuidv4 } from "uuid";

const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    const taskId = uuidv4();
    e.preventDefault();
    if (inputText === "") {
      return "";
    }
    //カードを追加する
    setTaskList([
      ...taskList,
      {
        id: taskId,
        text: inputText,
        draggableId: `task-${taskId}`,
      },
    ]);
    //インプットを空にする
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          value={inputText}
        ></input>
      </form>
    </div>
  );
};

export default TaskAddInput;
