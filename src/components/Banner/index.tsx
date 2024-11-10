import React, { useState, useEffect } from "react";
import Image from "next/image";
import Arvind from "../../../public/arvind2.png";

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

  return (
    <div className="flex justify-between items-center mx-48">
      <div className="flex-column w-1/2 ">
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-3xl text-black uppercase"> {currentTitle.text}</h1>
        </div>
        <h6 className=" text-xl my-4">📍 Dubai,United Arab Emirates</h6>
        <h6 className=" text-xl my-4 leading-loose">I enjoy the process of writing code that enhances the experience of humans behind the pixels.More importantly, I like the tingle that this process bring along to my day :)</h6>
      </div>
      <div className="py-1">
        <Image src={Arvind} width="300" height="500" alt="dev" />

        {/* <Image width={"650"} src={BannerImage} className="hidden md:block" alt="Developer" /> */}
      </div>
    </div>
  );
};

export default Banner;
