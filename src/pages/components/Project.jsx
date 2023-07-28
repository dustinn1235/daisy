import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Project = ({ reverse }) => {
  let [counter, setCounter] = useState(0);

  const btnHandle = (dir) => {
    const maxCtn = 1;
    const direction = dir === "left" ? -1 : 1;
    setCounter((cur) => {
      if (direction + cur > maxCtn) return 0;
      else if (direction + cur < 0) return maxCtn;
      else return direction + cur;
    });
  };

  return (
    <div
      className={`flex bg-white w-[60%] h-[30rem] rounded-2xl shadow-lg p-6 py-10 gap-10 items-center ${
        reverse && "flex-row-reverse"
      }`}
    >
      <div className="w-[60%] h-full rounded-2xl relative overflow-hidden">
        <button
          className="absolute h-full p-2 opacity-25 hover:opacity-100 z-10"
          onClick={() => btnHandle("left")}
        >
          <BsFillArrowLeftCircleFill className="text-2xl" />
        </button>
        <button
          className="absolute h-full p-2 right-0 opacity-25 hover:opacity-100 z-10"
          onClick={() => btnHandle("right")}
        >
          <BsFillArrowRightCircleFill className="text-2xl" />
        </button>

        <div
          className={`w-full max-h-full h-full flex translate-x-[${
            counter * -100
          }%] transition-transform duration-500`}
        >
          <img
            className="min-w-full w-full h-full object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            src="book_illustration/1.jpg"
          ></img>
          <img
            className="min-w-full w-full h-full object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            src="book_illustration/2.jpg"
          ></img>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-6 h-[90%]">
        <div>
          <h1 className="font-bold text-center text-xl">Hoa Hai Sac Tigon</h1>
          <h2 className="font-medium text-center">Book Illustation</h2>
        </div>
        <p className="text-center h-[70%] text-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          natus distinctio quod excepturi consectetur quidem magni, architecto
          at necessitatibus? Earum illo, quo asperiores ipsum porro autem
          deserunt excepturi. Quos, perferendis!
        </p>
        <button className="bg-black text-white w-[70%] flex-1 font-bold p-3">
          CASE STUDY
        </button>
      </div>
    </div>
  );
};

export default Project;
