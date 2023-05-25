import { useState } from "react";



function Nav() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="py-6">
        <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
          <div className="text-lg font-bold">masaya.com</div>
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="#home"
              className="hover:text-selected-text transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-selected-text transition-all duration-300"
            >
              ABOUT
            </a>
            <a
              href="#reseach"
              className="hover:text-selected-text transition-all duration-300"
            >
              RESEACH
            </a>
            <a
              href="#work"
              className="hover:text-selected-text transition-all duration-300"
            >
              WORK
            </a>
            <a
              href="#skill"
              className="hover:text-selected-text transition-all duration-300"
            >
              SKILL
            </a>

            {/* <a href="#work">
              <button className="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
                Work
              </button>
            </a> */}
           
          </div>
          <div className="md:hidden">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
