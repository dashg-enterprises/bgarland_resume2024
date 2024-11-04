import React from "react";

const skills = [
  "TypeScript",
  "React",
  "Redux",
  "GraphQL",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Python", // Add more
];

const Skills: React.FC = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-gray-800 text-white rounded p-2 text-center"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
