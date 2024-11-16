import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BannerProps {
  backgroundColor?: string;
  textColor?: string;
}

const Banner: React.FC<BannerProps> = () => {
  const titles = ["Software developer", "MERN Stack", "REACTJS PROFICIENT "];
  const [currentTitle, setTitle] = useState({
    text: titles[0],
    index: 0,
  });

  useEffect(() => {
    let id = setInterval(() => {
      if (currentTitle.index === titles.length - 1) {
        setTitle({
          text: titles[0],
          index: 0,
        });
      } else {
        setTitle({
          text: titles[currentTitle.index + 1],
          index: currentTitle.index + 1,
        });
      }
    }, 4000);

    return () => {
      clearTimeout(id);
    };
  }, [currentTitle]);

  //

  return (
    <div className="flex flex-col px-8 pt-48 text-black lg:justify-center lg:items-center  h-screen w-full bg-gradient-to-r from-orange-200 to-purple-300">
      <h1 className="text-xl w-full lg:text-6xl text-black uppercase my-12 lg:text-center">{`Hello ! I am Arvind :)`}</h1>
      <div className="flex-column w-full lg:w-1/3 ">
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl lg:text-3xl text-black uppercase"> {currentTitle.text}</h1>
        </div>
        <h2 className=" text-xl my-8">📍 Dubai,United Arab Emirates</h2>
        <h3 className=" text-xl my-4 leading-loose">I enjoy the process of writing code that enhances the experience of humans behind the pixels. More importantly, I like the tingle that this process brings along to my day :)</h3>
      </div>
    </div>
  );
};

export default Banner;
