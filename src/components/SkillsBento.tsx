import { BentoCard } from "./bento-card";
import ScrumCerts from "./ScrumCerts";
import { SkillsSlideIn } from "./SkillsSlideIn";

const SkillsBento = () => {
  return (
    <div className="grid h-[650px] grid-cols-5 gap-2 grid-rows-5 mt-10">
      <div className=" col-span-1 row-span-5">
        <BentoCard
          dark
          eyebrow="Scrum Alliance"
          title="Certifications I've earned"
          description=" "
          graphic={<ScrumCerts />}
          className="z-10 lg:col-span-2 lg:rounded-tr-4xl"
        />
      </div>
      <div className="col-span-2 row-span-3 bg-red-500" />
      <div className="col-span-2 row-span-5">
        <BentoCard
          dark
          eyebrow="Languages, Frameworks, and Tools"
          title="A few of my favorite things"
          description="From frontend sparkle to backend brilliance, I work across the stack to bring products to life, handling everything from databases to user interfaces."
          graphic={<SkillsSlideIn />}
          className="z-10 lg:col-span-2 lg:rounded-tr-4xl"
        />
      </div>
      <div className="col-span-2 row-span-2 bg-yellow-500"></div>
    </div>
  );
};

export default SkillsBento;
