import React from "react";

const Intro: React.FC = () => {
  return (
    <>
      <section className="bg-[#222222] opacity-80 text-white p-8 flex justify-center relative">
        <div className="top-[-150px] absolute" id="about-me" />
        <div className="w-100 md:w-7/12 flex flex-col gap-6">
          <h1 className="text-8xl font-bold ">Hi! I'm Brandy!</h1>
          <p className="text-xl">
            I'm a seasoned tech leader and Agile coach with a passion for
            building high-impact, user-centric digital products. With experience
            in product management, full-stack development, and software
            engineering, I thrive on transforming ambitious ideas into top-notch
            solutions that users love. Currently, I lead cross-functional teams
            to redesign and re-platform applications, focusing on modern UI/UX,
            accessibility, and performance optimization.
          </p>

          <p className="text-xl">
            I’m skilled in a wide array of technologies—TypeScript, React,
            Node.js, Python, AWS, and Kubernetes, to name a few—and have a
            strong track record of guiding teams through Agile transformations,
            fostering collaboration, and boosting productivity. My approach
            bridges technical innovation with strategic product vision, ensuring
            every project aligns with business goals and market needs. Whether
            it’s streamlining development workflows, enhancing digital
            transformation, or driving product strategy, I'm dedicated to
            creating seamless, value-driven user experiences that stand out in
            today's fast-paced tech landscape. Let's connect and build something
            incredible!
          </p>
        </div>
      </section>
    </>
  );
};

export default Intro;
