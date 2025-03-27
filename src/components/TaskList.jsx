import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!user.isLoggedIn) {
    return (
      <p className="text-center text-gray-500">
        🔒 Please log in to manage tasks.
      </p>
    );
  }

  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">
          No tasks available. Add some!
        </p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 border border-gray-300 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium">{task.text}</span>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-md ${
                    task.priority === "High"
                      ? "bg-red-500 text-white"
                      : task.priority === "Medium"
                      ? "bg-yellow-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {task.priority}
                </span>
              </div>
              <button
                onClick={() => dispatch(deleteTask(index))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-all duration-200"
              >
                ❌ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
