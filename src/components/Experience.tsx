import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience: React.FC = () => {
  return (
    <section className="p-8 bg-[#222222] opacity-90 text-white relative">
      <div className="top-[-75px] md:top-[-150px] absolute" id="experience" />

      <h2 className="text-3xl font-bold">Experience</h2>
      <ExperienceTimeline />
    </section>
  );
};

export default Experience;
