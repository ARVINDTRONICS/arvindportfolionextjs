import React from "react";
import Image from "next/image";
import JumeirahLogo from "../../../public/jumeirah_logo.jpeg";
import CrayonDataLogo from "../../../public/crayondata_logo.jpeg";
import TCSLogo from "../../../public/tata_consultancy_services_logo.jpeg";
import DevImage from "../../../public/winner.webp";

const EXPERIENCE = [
  {
    logo: TCSLogo,
    location: "Chennai,IND",
    url: {
      link: "https://www.tcs.com/",
      text: "tcs.com",
    },
    title: "Systems Engineer",
    company: "Tata Consultancy Services",
    period: " Dec,2017 - Feb,2020",
  },

  {
    logo: CrayonDataLogo,
    location: "Chennai,IND",
    url: {
      link: "https://crayondata.ai/",
      text: "crayondata.ai",
    },
    title: "UI Engineer",
    company: "Crayon Data",
    period: " Mar,2020 - Nov,2021",
  },
  {
    logo: JumeirahLogo,
    location: "Dubai,UAE",
    url: {
      link: "https://www.jumeirah.com/en",
      text: "jumeirah.com",
    },
    title: "Full Stack Developer",
    company: "Jumeirah Hospitality",
    period: " Nov,2021 - Present",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col w-full  bg-gray-50 items-center my-32 ">
      <div className="w-4/5 flex justify-center rounded-md items-center  h-full">
       

        <ol className="items-center sm:flex">
          {EXPERIENCE.map((each, index) => {
            return (
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-24 h-24 bg-transparent-100 rounded-full  rounded-md ring-0 ring-white dark:bg-blue-900 sm:ring-8 shrink-0">
                    <Image src={each.logo} className="w-full h-full" />
                  </div>
                  {index < EXPERIENCE.length - 1 && <div className="hidden w-96 sm:flex  bg-gray-200 h-0.5 dark:bg-gray-700"></div>}
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold">{each.title}</h3>
                  <h3 className="text-lg mt-4">{each.company}</h3>
                  <time className="block mb-2 mt-4 text-sm font-normal leading-none">{`📍 ${each.location}`}</time>
                  <p className="text-base mt-4 font-bold">Nov,2021 - Present</p>
                  <a href={each.url.link} className="text-base underline font-normal mt-4 ">
                    {each.url.text}
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
