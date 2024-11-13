import React from "react";
import Image from "next/image";
import Monitor from "../../../public/Monitor.png";
import Phone from "../../../public/phone.png";
import Database from "../../../public/database.jpg";
import Server from "../../../public/server.jpg";
import Cloud from "../../../public/cloud.jpg";

const SKILLS = {
  WEB_SKILLS: {
    list: ["HTML", "CSS", "JAVASCRIPT", "REACTJS", "REDUX", "NEXTJS", "Jest", "Mocha", "tailwindCSS"],
    image: Monitor,
  },
  MOBILE_SKILLS: {
    list: ["React Native"],
    image: Phone,
  },
  BACKEND_SKILLS: {
    list: ["Node.js", "ExpressJS"],
    image: Server,
  },
  DATABASE_SKILLS: {
    list: ["SQL", "MongoDB", "Mongoose", "GRAPHQL"],
    image: Database,
  },

  OTHER_SKILLS: {
    list: ["Agile", "Git", "REST", "Shopify", "Azure", "System Design", "Sitecore CMS"],
    image: Cloud,
  },
};

const Skills = () => {
  return (
    <div id="skills" className="w-full flex py-12 items-center justify-center bg-white">
      <div className="container relative flex flex-col justify-between  max-w-6xl px-10 mx-auto xl:px-0">
        <div className="my-12">
          <p className="text-lg text-center font-medium text-gray-600 font-pj">Tools of the trade </p>
          <h2 className="mt-4 text-3xl text-center font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Skills</h2>
        </div>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 uppercase">Frontend</h3>
                  </div>
                  <div className="flex flex-wrap  justify-center">
                    {SKILLS["WEB_SKILLS"]?.list.map((eachSkill) => {
                      return <div className="border border-black rounded-lg px-2 py-1 mx-2 my-2 text-sm text-black font-bold uppercase">{eachSkill}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">DATABASE</h3>
                  </div>
                  <div className="flex flex-wrap  justify-center">
                    {SKILLS["DATABASE_SKILLS"]?.list.map((eachSkill) => {
                      return <div className="border border-black rounded-lg px-2 py-1 mx-2 my-2 text-sm text-black font-bold uppercase">{eachSkill}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 uppercase">Backend</h3>
                  </div>
                  <div className="flex flex-wrap  justify-center">
                    {SKILLS["BACKEND_SKILLS"]?.list.map((eachSkill) => {
                      return <div className="border border-black rounded-lg px-2 py-1 mx-2 my-2 text-sm text-black  font-bold uppercase">{eachSkill}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">MOBILE</h3>
                  </div>
                  <div className="flex flex-wrap  justify-center">
                    {SKILLS["MOBILE_SKILLS"]?.list.map((eachSkill) => {
                      return <div className="border border-black rounded-lg px-2 py-1 mx-2 my-2 text-sm text-black  font-bold uppercase">{eachSkill}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">OTHER</h3>
                  </div>
                  <div className="flex flex-wrap  justify-center">
                    {SKILLS["OTHER_SKILLS"]?.list.map((eachSkill) => {
                      return <div className="border border-black  rounded-lg px-2 py-1 mx-2 my-2 text-sm text-black  font-bold uppercase">{eachSkill}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
