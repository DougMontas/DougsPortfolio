import React from "react";

export default function Navbar() {
  return (
    <div id="thenavbar" className="">
      <header id="thenavbar" className="">
        <div
          id="thenavbar"
          className="fixed right-6 md:mx-auto flex flex-wrap items-center text-base justify-center bg-sky-500 text-white h-fit w-max p-2 mt-2 rounded-xl opacity-50"
        >
          <nav className="md:ml-auto pl-4 flex flex-wrap items-center text-base justify-center">
            {/* <a href="#services" className="mr-5 hover:text-gray-900">
              Skills
            </a> */}
            <a href="#skills" className="mr-5 hover:text-gray-900">
              Skills
            </a>
            <a href="#testimonials" className="mr-5 hover:text-gray-900">
              Testimonials
            </a>
            <a
              href="#contactMe"
              className="mr-5 scroll-smooth hover:text-gray-900"
            >
              Contact Me
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
