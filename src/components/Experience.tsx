import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience: React.FC = () => {
  return (
    <section className="p-8 bg-[#222222] opacity-90 text-white relative overflow-x-hidden">
      <div className="top-[-75px] md:top-[-150px] absolute" id="experience" />

      <ExperienceTimeline />
    </section>
  );
};

export default Experience;
