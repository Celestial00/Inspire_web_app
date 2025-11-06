import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isDark, setDark] = useState(false);

  const ToggleMode = () => {
    document.documentElement.classList.toggle("dark");
    setDark(document.documentElement.classList.contains("dark"));
  };

  return (
    <div className="flex gap-10 justify-center mt-10 items-center">
      <div>
        <h1 className="text-lg poppins dark:text-white cursor-pointer">Home</h1>
      </div>
      <div
        className=" w-10 flex justify-center items-center  h-10 bg-gray-100 dark:bg-gray-800 cursor-pointer rounded-full"
        onClick={ToggleMode}
      >
        {isDark ? (
          <FaMoon className="text-blue-400" />
        ) : (
          <FaSun className="text-yellow-500" />
        )}
      </div>
      <div>
        <h1 className="text-lg poppins dark:text-white cursor-pointer ">About Us</h1>
      </div>
    </div>
  );
}
