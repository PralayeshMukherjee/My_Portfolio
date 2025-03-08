import React from "react";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  DSA Enthusiast
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I make it a point to practice DSA questions every day and
                  participate in Competitive Programming contests on platforms
                  like Codeforces, CodeChef, LeetCode, GeeksforGeeks, etc. I
                  have already solved over 350+ questions on LeetCode, achieved
                  a 1200+ rating on CodeChef, am a Newbie at Codeforces,
                  attained a 5-star rank on Hackerrank, and solved around 550+
                  DSA questions.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Java Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am Java Full Stack Web Development. I have work on various
                  projects on Spring Boot, Spring MVC, Spring JPA, JDBC etc.
                  Additionally, I have been working on front-end development and
                  have created some basic-level projects. I am also learning
                  Linux, specifically Ubuntu and Red Hat Linux, to familiarize
                  myself with this operating system.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  My Main Focus
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I aim to contribute my skills and knowledge to the development
                  world and enhance the user experience.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
