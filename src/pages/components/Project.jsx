import React from "react";

const Project = ({ reverse }) => {
  return (
    <div
      className={`flex bg-white w-[60%] h-[30rem] rounded-2xl shadow-lg p-6 gap-10 items-center ${
        reverse && "flex-row-reverse"
      }`}
    >
      <img
        className="w-[60%] h-full object-contain rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        src="cover.jpg"
      ></img>
      <div className="flex-1 flex flex-col items-center gap-6 h-[90%]">
        <h1 className="font-bold text-center text-xl">Book Illustator</h1>
        <p className="text-center h-[70%] text-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          natus distinctio quod excepturi consectetur quidem magni, architecto
          at necessitatibus? Earum illo, quo asperiores ipsum porro autem
          deserunt excepturi. Quos, perferendis!
        </p>
        <button className="bg-black text-white w-[70%] flex-1 font-bold">
          CASE STUDY
        </button>
      </div>
    </div>
  );
};

export default Project;
