import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import { NavBar } from "./components/NavBar";
import SkillsBento from "./components/SkillsBento";
import Contact from "./components/Contact";
import PersonalProjects from "./components/PersonalProjects";

const App: React.FC = () => {
  return (
    <div className="bg-svg ">
      <NavBar />
      <Intro />
      <div className="flex w-full justify-center relative">
        <div className="top-[-75px] md:top-[-150px] absolute" id="skills" />
        <div className="w-full md:w-[90%] lg:w-[1220px] m-8">
          <SkillsBento />
        </div>
      </div>
      <Experience />
      <PersonalProjects />
      <Contact />

      {/* Add more sections like Education and Contact */}
    </div>
  );
};

export default App;
