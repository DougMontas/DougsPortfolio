import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

function About() {
  // initTE({ Ripple });
  return (
    <div id="about" className=''>
      <Popover className=''>
      <PopoverHandler>
        <Button className='flex mx-auto mt-16 text-white bg-sky-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg shadow-gray-900 ease-out duration-500 transform hover:scale-100 hover:translate-y-2'>About Me</Button>
      </PopoverHandler>
      <PopoverContent className='bg-black text-white text-lg indent-3 bg-opacity-80'>
       <p>As a software developer, I enjoy developing software solutions that are user-friendly, scalable, and efficient. I take pride in my ability to work collaboratively with other professionals, including project managers, designers, and quality assurance engineers, to deliver high-quality software applications. I'm also committed to staying up-to-date with the latest technologies and programming languages to ensure that I am always delivering cutting-edge solutions to my clients.</p>
       <br></br>

<p>One of the things that set me apart as a software developer is my attention to detail and ability to learn new technologies. I understand that even a minor error in software code can cause significant problems, which is why I strive to write code that is easy to read, maintain, and debug. I also value communication and collaboration, and I'm always looking for ways to improve my skills as a team player.</p>

      </PopoverContent>
    </Popover>
    </div>
  );
}

export default About;
