import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoApp from "./components/TodoApp";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <div className="flex items-center justify-center p-8">
          <div className="shadow-lg rounded-xl p-8 w-full max-w-lg border border-gray-300">
            <TodoApp />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
