import React from "react";

const experiences = [
  {
    role: "Director of Product",
    company: "Intellicheck",
    period: "Aug 2023 - Present",
    description: `Managing global teams, re-platforming identity verification application, training in Scrum practices.`,
  },
  // Add other experiences
];

const Experience: React.FC = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="text-gray-600">
            {exp.company} | {exp.period}
          </p>
          <p className="mt-2">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
