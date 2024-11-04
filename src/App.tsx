import React from "react";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const App: React.FC = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Experience />
      {/* Add more sections like Education and Contact */}
    </div>
  );
};

export default App;
