import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";

const Auth = () => {
  const [username, setUsername] = useState("");
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username }));
      setUsername("");
    }
  };

  return (
    <div>
      {user?.isLoggedIn === false && (
        <div className="p-6 shadow-lg rounded-lg w-full max-w-xs mx-auto">
          <h2 className="text-xl font-semibold text-center mb-3">Login</h2>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-black text-white hover:text-black font-medium py-2 rounded-md hover:bg-gray-300 transition-all"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
