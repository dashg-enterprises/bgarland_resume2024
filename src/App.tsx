import React from "react";
import Intro from "./components/Intro";
// import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { SkillsSlideIn } from "./components/SkillsSlideIn";
import { BentoCard } from "./components/bento-card";
import { NavBar } from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="bg-circut-board">
      <NavBar />
      <Intro />
      {/* <Skills /> */}
      {/* <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"> */}
      <div className="flex justify-center m-3 width-[100vw] md:w-3/6 lg:w-2/6 relative">
        <div className="top-[-150px] absolute" id="skills" />
        <BentoCard
          dark
          eyebrow="Languages, Frameworks, and Tools"
          title="A few of my favorite things"
          description="From frontend sparkle to backend brilliance, I work across the stack to bring products to life, handling everything from databases to user interfaces."
          graphic={<SkillsSlideIn />}
          className="z-10 lg:col-span-2 lg:rounded-tr-4xl"
        />
      </div>
      <Experience />
      <div className="bg-green-950 h-screen">hello!</div>
      {/* Add more sections like Education and Contact */}
    </div>
  );
};

export default App;
