import React from "react";
function Navbar() {
  return (
    <section className="bg-backgroundColor backdrop-blur-[10px] shadow-navbar w-auto h-[75px] flex justify-between items-center px-[70px] text-center fixed bottom-6 rounded-full left-1/2 transform -translate-x-1/2 z-[30]">
      {/* list  */}
      <div className="flex justify-between items-center">
        <ul className="flex justify-center gap-8 items-center m-auto text-center">
          <li>
            <a
              className="no-underline text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="no-underline text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="no-underline text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="no-underline text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="no-underline text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
