import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiLinux, SiMysql } from "react-icons/si";
import {
  SiC,
  SiGit,
  SiGithub,
  SiPostman,
  SiApachetomcat,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaCodeBranch } from "react-icons/fa";
import gdg from "../../ff.png";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSpringboot color="#4F7942" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#0000FF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiLinux color="#FFFFFF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiC color="#07bff5" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGit color="#f94b00" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGithub color="#FFFFFF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPostman color="#f94b00" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiApachetomcat color="#f9f500" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiJava color="#00aef9" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCodeBranch color="#00aef9" size={50} />
          </span>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={gdg} alt="GDSC Logo" className="w-16 h-16" />
            <span className="text-white">
              <h2 className="leading-tight">Core Team Member</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Teach beginner developers DSA</li>
              </ul>
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl text-white font-bold">
            Education
          </h1>
          <div className="flex flex-wrap items-center justify-around">
            <div className="flex gap-10 mr-4 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
              <span className="text-white">
                <h2 className="leading-tight">Techno India University</h2>
                <p className="text-sm leading-tight font-thin">
                  Aug 2023 - June 2027
                </p>
                <ul className="text-sm p-2">
                  <li>
                    - 2nd year B.Tech Computer Science and Engineering student.
                  </li>
                </ul>
              </span>
            </div>
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
              <span className="text-white">
                <h2 className="leading-tight">Ondal High School</h2>
                <p className="text-sm leading-tight font-thin">
                  Jul 2020 - June 2022
                </p>
                <ul className="text-sm p-2">
                  <li>- Hs, Science specially Mathematics</li>
                  <li>- Solve more than 30+ math question papers</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
