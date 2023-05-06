import React from "react";
import MyPic from "../assets/MyPicNoBg.png";

export default function MainPicture() {
  return (
    <div className="">
      <section
        id="bglines"
        className="text-gray-600 body-font h-full bg-gradient-to-tr from-orange-100 to-cyan-400 rounded-md"
      >
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div
            id="hidemainpicture"
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white italic">
              All-Around Developer
              <br className="hidden lg:inline-block italic" /> With a Love for
              Creating
            </h1>
            <p className="mb-8 text-white leading-relaxed italic">
              "My dream is to excel as a developer. I enjoy learning new things.
              Whether it is web, software or blockchain development, I am exicted to create
              amazing products and explore new technologies."
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/DougMontas?tab=repositories"
                target="_blank"
              >
                <button className="inline-flex text-white bg-sky-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg shadow-md shadow-gray-900 ease-out duration-500 transform hover:scale-100 hover:translate-y-2">
                  View My Work
                </button>
              </a>
              <a href="#contactMe">
                <button className="ml-4 inline-flex text-white bg-sky-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg shadow-md shadow-gray-900 ease-out duration-500 transform hover:scale-100 hover:translate-y-2">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-end lg:max-w-lg lg:w-full md:w-1/2">
            <img
              id="hideRight"
              className="object-cover object-center rounded-2xl"
              alt="Software Developer"
              src={MyPic}
            />
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://github.com/DougMontas/DougsPortfolio"
            target="_blank"
          >
            <h1 className="italic text-xl animate-bounce text-white">
              ** Created with React.js - Tailwindcss - CSS **{" "}
              <p className="italic underline">checkout code</p>
            </h1>
          </a>
        </div>
      </section>
    </div>
  );
}
