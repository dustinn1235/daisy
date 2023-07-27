import React from "react";
import Project from "./Project";

const Projects = () => {
  const projects = [1, 2, 3];

  return (
    <div className="flex flex-col py-20 bg-[#f9f9f9] items-center gap-16 relative">
      <div id="projects" className="absolute h-5 w-full -top-[5rem]"></div>
      <h1 className="text-5xl font-semibold">PORTFOLIO</h1>
      {projects.map((project, i) => {
        const reverse = i % 2 == 0;
        return <Project reverse={reverse} />;
      })}
    </div>
  );
};

export default Projects;
