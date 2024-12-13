import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <section className="bg-backgroundColor w-full h-[100px] flex justify-between items-center px-[150px] text-center">
      {/* logo  */}
      <div>
        <Link
          to="/"
          className="text-textThemeColor font-extrabold no-underline text-4xl	hover:text-[#953ba5]"
        >
          Furkan
        </Link>
      </div>
      {/* list  */}
      <div className="flex justify-between items-center">
        <ul className="flex justify-center gap-8 items-center m-auto text-center">
          <li>
            <Link
              className="no-underline	text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Project"
              className="no-underline	text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Skills"
              className="no-underline	text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="no-underline	text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="no-underline	text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
