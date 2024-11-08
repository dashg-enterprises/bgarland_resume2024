import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import { NavBar } from "./components/NavBar";
import SkillsBento from "./components/SkillsBento";

const App: React.FC = () => {
  return (
    <div className="bg-circut-board overflow-x-hidden">
      <NavBar />
      <Intro />
      <div className="flex w-full justify-center relative">
        <div className="top-[-75px] md:top-[-150px] absolute" id="skills" />
        <div className="w-full md:w-[90%] lg:w-[1220px] m-8">
          <SkillsBento />
        </div>
      </div>
      <Experience />
      <div className="bg-green-950 h-screen">hello!</div>
      {/* Add more sections like Education and Contact */}
    </div>
  );
};

export default App;
