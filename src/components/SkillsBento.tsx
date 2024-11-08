import { BentoCard } from "./bento-card";
import ScrumCerts from "./ScrumCerts";
import { SkillsSlideIn } from "./SkillsSlideIn";
import Socials from "./Socials";
import UniversityBento from "./UniversityBento";
import React from "react";

const SkillsBento = () => {
  return (
    <div className="grid min-[1020px]:h-[1000px] lg:h-[700px] lg:grid-cols-3 gap-2 lg:grid-rows-5 mt-0 min-[1020px]:grid-cols-2 min-[1020px]:grid-rows-10">
      <div className="min-[1020px]:col-span-1 min-[1020px]:row-span-6 lg:col-span-1 lg:row-span-5">
        <BentoCard
          dark
          eyebrow="Scrum Alliance"
          title="Certifications I've earned"
          description="Certified and ready to sprint!"
          graphic={<ScrumCerts />}
          className="z-10 lg:col-span-2 lg:rounded-tr-4xl"
        />
      </div>
      <div className="min-[1020px]:col-span-1 min-[1020px]:row-span-3 lg:col-span-1 lg:row-span-3">
        <BentoCard
          dark
          eyebrow="Links"
          title=""
          description=""
          graphic={<Socials />}
          className="z-10 lg:col-span-2 lg:rounded-tr-4xl"
        />
      </div>
      <div className="min-[1020px]:order-4 lg:order-3 min-[1020px]:col-span-2 min-[1020px]:row-span-3 lg:col-span-1 lg:row-span-5">
        <BentoCard
          dark
          eyebrow="Languages, Frameworks, and Tools"
          title="A few of my favorite things"
          description="From frontend sparkle to backend brilliance, I work across the stack to bring products to life, handling everything from databases to user interfaces."
          graphic={<SkillsSlideIn />}
          className="z-10 lg:col-span-2 lg:rounded-tr-4xl"
        />
      </div>
      <div className="min-[1020px]:order-3 lg:order-4 min-[1020px]:col-span-1 min-[1020px]:row-span-3 lg:col-span-1 lg:row-span-2">
        <BentoCard
          dark
          eyebrow="University Honors | Cum Laude"
          title="Bachelor's of Science in Psychology"
          description=""
          graphic={<UniversityBento />}
          className="z-10 lg:col-span-2 lg:rounded-tr-4xl"
        />
      </div>
    </div>
  );
};

export default SkillsBento;
