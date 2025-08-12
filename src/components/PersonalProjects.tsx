import React from "react";
import PersonalProjectsTimeline from "./PersonalProjectsTimeline";

const PersonalProjects: React.FC = () => {
  return (
    <section className="p-8 bg-[#222222] opacity-90 text-white relative overflow-x-hidden">
      <div className="top-[-75px] md:top-[-150px] absolute" />

      <PersonalProjectsTimeline />
    </section>
  );
};

export default PersonalProjects;
