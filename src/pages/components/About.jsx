import React from "react";

const About = () => {
  return (
    <div className="flex flex-col py-20">
      <h1 className="self-center text-5xl">ABOUT ME</h1>
      <div className="self-center w-[70%] grid grid-cols-2 pt-14 gap-6">
        <div>
          <p className="text-3xl">Get to know me!</p>
          <p className="pt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            totam. Illo exercitationem enim a illum expedita veritatis tempora.
            Nisi molestiae eligendi voluptatem similique hic natus excepturi
            perferendis atque expedita eos! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quo maxime sunt quas sit sapiente
            culpa id totam? Deserunt quis ullam consequuntur harum iure
            voluptatibus, praesentium nostrum hic possimus, dolorum alias. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus et
            adipisci nemo vitae quibusdam provident autem qui omnis at animi,
            sapiente voluptas, magnam rerum commodi facilis, iusto fugit modi.
          </p>
        </div>
        <img className="border-2 border-black w-full"></img>
      </div>
    </div>
  );
};

export default About;
