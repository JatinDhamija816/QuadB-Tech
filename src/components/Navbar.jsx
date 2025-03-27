import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">To-Do App</h1>
      <div>
        {user.isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="font-semibold">{user.username}</span>
            <button
              onClick={() => dispatch(logout())}
              className="bg-white text-black px-4 py-2 rounded-md border border-black hover:bg-gray-200 transition-all duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => dispatch(login({ username: "Guest" }))}
            className="bg-white text-black px-4 py-2 rounded-md border border-black hover:bg-gray-200 transition-all duration-200"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
