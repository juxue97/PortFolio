import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setIsDarkMode } from "@/lib/state";
import { scrollToSection } from "@/utils/scrollUtils";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-500 text-white py-2 px-5 z-50 shadow-md backdrop-blur-md bg-opacity-75">
      {/* Navbar */}
      <nav className="flex items-center justify-between">
        <h1 className="font-semibold">
          <Link href="/homepage" className="hover:text-gray-400">
            Teh&apos;s Portfolio
          </Link>
        </h1>
        <ul className="flex gap-3 items-center">
          <li>
            <Link
              href="/homepage"
              className="hidden sm:flex hover:text-gray-400"
            >
              Home
            </Link>
          </li>
          <li>
            <button
              className="hidden sm:flex hover:text-gray-400"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="hidden sm:flex hover:text-gray-400"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
          <li className="items-center">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Moon
                  size={24}
                  className="cursor-pointer text-gray-300 hover:text-yellow-500 hover:rounded-full p-1"
                />
              ) : (
                <Sun
                  size={24}
                  className="cursor-pointer text-gray-100 hover:text-yellow-500 hover:rounded-full p-1"
                />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
