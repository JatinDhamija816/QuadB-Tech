import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { useSelector } from "react-redux";
import Auth from "./Auth";

const TodoApp = () => {
  const user = useSelector((state) => state.auth);

  return (
    <div className="w-full max-w-lg p-6 bg-white rounded-xl">
      <Auth />
      {user?.isLoggedIn && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Manage Your Tasks
          </h2>
          <TaskInput />
          <TaskList />
        </div>
      )}
    </div>
  );
};

export default TodoApp;
