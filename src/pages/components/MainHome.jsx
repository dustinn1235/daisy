import React from "react";
import { FaStar } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const MainHome = () => {
  const words = ["GRAPHIC DESIGNER", "VISUALIZER", "ILLUSTRATOR"];

  return (
    <div className="flex flex-col items-center justify-center h-screen pb-[5%] bg-[#f9f9f9]">
      <div className="flex flex-col">
        <p className="text-7xl">HEY, I'M TRAN ANH THU</p>
        <p className="ml-auto text-4xl translate-x-8">or Daisy</p>
      </div>
      <FaStar className="mt-12 text-[2rem]" />
      <div className="mt-12 flex flex-col items-center text-xl">
        <p>Hope you are having a great time!</p>
        <div className="flex">
          <span>Are you looking for a</span>
          <div className="ml-1 font-semibold">
            <Typewriter
              onInit={(typewriter) => {
                let i = 0;
                setInterval(() => {
                  typewriter
                    .typeString(words[i])
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                  i++;
                  i = i % words.length;
                }, 1000);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
