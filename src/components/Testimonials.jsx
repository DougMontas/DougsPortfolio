import React from "react";
import MyPic from "../assets/MyPicNoBg.png";
import Danny from "../assets/Danny.png";
import Jen from "../assets/jen.png";
import Steph from "../assets/steph.png";
import Tony from "../assets/tony.png";

export default function Testimonials() {
  return (
    <div id="testimonials">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Testimonials
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div id="testimonial1" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-contain object-center mb-6"
                  src={Danny}
                  alt="Web Developer"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Profession
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Software Developer
                </h2>
                <p className="leading-relaxed text-base">
                  Working with "Doug" was an absolute dream! His enthusiasm and
                  passion for programming inspires me to strive for great
                  results. He always makes sure to stay up to date on the newest
                  technology and is able to write clean and well-tested code.{" "}
                </p>
              </div>
            </div>
            <div id="testimonial" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-contain object-center mb-6"
                  src={Jen}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Profession
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Software Developer
                </h2>
                <p className="leading-relaxed text-base">
                  I had the pleasure of working "Doug" firsthand, and it was
                  truly an amazing experience! He has great attention to detail
                  and is able to take complex problems and create a logical
                  solution by breaking them down into parts.
                </p>
              </div>
            </div>
            <div id="testimonial1" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-contain object-center mb-6"
                  src={Tony}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Profession
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Blockchain Developer
                </h2>
                <p className="leading-relaxed text-base">
                  Collaborating with "Mr. Montas" was a real joy! His best trait
                  is that he quickly adapts to different coding conventions,
                  allowing us as a team to work together effortlessly. In
                  addition, he has a knack for finding creative solutions in an
                  efficient manner which always impresses me.
                </p>
              </div>
            </div>
            <div id="testimonial" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-contain object-center mb-6"
                  src={Steph}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Profession
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Web Developer
                </h2>
                <p className="leading-relaxed text-base">
                  "Doug's" strength lies in his ability to problem-solve in
                  difficult situations under tight deadlines. He works hard and
                  always seems willing to take on challenges, pushing himself
                  further every time he does something new. I highly recommend
                  him as an excellent asset for any tech team!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
