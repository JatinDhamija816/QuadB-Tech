import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask({ text: task, priority }));
    setTask("");
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mb-4 p-4 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Enter your task..."
        className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        className="p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        type="submit"
        className="w-full bg-black text-white hover:text-black font-medium py-2 rounded-md hover:bg-gray-300 transition-all"
      >
        ➕ Add Task
      </button>
    </form>
  );
};

export default TaskInput;
