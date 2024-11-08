import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import { NavBar } from "./components/NavBar";
import SkillsBento from "./components/SkillsBento";

const App: React.FC = () => {
  return (
    <div className="bg-circut-board">
      <NavBar />
      <Intro />
      <div className="flex w-full justify-center">
        <div className="w-full md:w-[90%] lg:w-[1220px] m-8">
          <SkillsBento />
        </div>
      </div>
      {/* <Skills /> */}
      {/* <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"> */}
      <div className="flex justify-center m-3 width-[100vw] md:w-3/6 lg:w-2/6 relative">
        <div className="top-[-150px] absolute" id="skills" />

        {/* <BentoCard
          dark
          eyebrow="Languages, Frameworks, and Tools"
          title="A few of my favorite things"
          description="From frontend sparkle to backend brilliance, I work across the stack to bring products to life, handling everything from databases to user interfaces."
          graphic={<SkillsSlideIn />}
          className="z-10 lg:col-span-2 lg:rounded-tr-4xl"
        /> */}
      </div>
      <Experience />
      <div className="bg-green-950 h-screen">hello!</div>
      {/* Add more sections like Education and Contact */}
    </div>
  );
};

export default App;
