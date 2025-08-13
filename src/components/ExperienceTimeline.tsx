import React from "react";

const timeline = [
  {
    name: "Senior Staff FullStack Engineer | Tech Lead",
    company: "Method",
    description:
      "I design and deliver accessible full-stack features for a legacy CRM, collaborating with a multi-company team to create scalable, multi-tenant solutions for an e-commerce client. I work closely with stakeholders to turn ideas into clear, actionable plans, while overseeing code releases, deployments, and rollbacks. I also lead technical discussions and champion improvements in development practices, cloud systems, and agile processes.",
    date: "Present",
    dateTime: "2025-1",
  },
  {
    name: "Director of Product",
    company: "Intellicheck",
    description:
      "I directed the re-platforming of our identity verification application with a modernized UI/UX and accessibility standards, managed global teams and project expenses, collaborated with marketing to drive customer engagement, implemented Scrum practices across the organization, facilitated Agile training and ceremonies, and worked directly with clients to translate requirements into a structured product backlog, fostering continuous improvement and strong customer relationships.",
    date: "Aug 2023",
    dateTime: "2023-08",
  },
  {
    name: "Senior FullStack Developer | Scrum Master | Product Owner",
    company: "BEN Labs",
    description:
      "I held a combined role as Senior FullStack Developer, Scrum Master, and Product Owner, where I led the adoption of Scrum practices across the company, managed the product backlog in JIRA, facilitated sprint planning and prioritization, and worked closely with teams to develop software that empowered creators to build their audiences and brands.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Senior FullStack Developer | Scrum Master | Product Owner",
    company: "ForceMetrics",
    description:
      "At ForceMetrics, I worked as a Senior FullStack Developer, Scrum Master, and Product Manager, where I led the design and development of software aimed at enhancing safety for civilians and law enforcement, coached teams in Agile best practices, created responsive web and mobile interfaces, and collaborated directly with clients to gather requirements and build a product backlog aligned with business goals.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Senior FullStack Developer",
    company: "Sleep Number",
    description:
      "I worked as a Senior FullStack Developer on a distributed team to migrate the company's e-commerce platform to the Workarea system, led codebase improvement initiatives, resolved technical issues across the stack, and collaborated closely with product and design teams to guide implementation details, ensuring a seamless development process. I also created and led the product development of the share cart feature.",
    date: "May 2020",
    dateTime: "2020-05",
  },
  {
    name: "Senior FullStack Developer",
    company: "Nutrien",
    description:
      "I developed client-facing front-end applications, created and maintained APIs using JavaScript and Django, enforced best practices through test-driven development, and collaborated with cross-functional teams to enhance technical capabilities and deliver high-value solutions.",
    date: "Dec 2019",
    dateTime: "2019-12",
  },
  {
    name: "FullStack Developer",
    company: "Blue Cross Blue Shield",
    description:
      "I contributed as a FullStack Developer by building a comprehensive React web application for a HealthTech client, developing new web components integrated with Redux, creating and managing APIs, and optimizing a legacy codebase to enhance functionality and developer efficiency.",
    date: "May 2019",
    dateTime: "2019-05",
  },
  {
    name: "FullStack Developer | Team Lead",
    company: "TradePMR",
    description:
      "I led a distributed team in developing EarnWise, a React web application for portfolio and order management, optimized the platform for mobile use, collaborated with executives for FinTech presentations, and significantly enhanced the performance of the position trading system while working across multiple technologies, including React, TypeScript, and .NET.",
    date: "August 2018",
    dateTime: "2018-08",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="bg-[#222222] opacity-[.98] p-8 w-screen flex justify-center">
      <div className="max-w-7xl relative">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="text-pink-600 absolute left-[-20px] top-[85px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </div>
        <div className="text-pink-600 absolute right-[-20px] top-[85px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl overflow-x-auto w-screen">
          <div className="flex w-fit h-fit gap-4 border-t border-pink-600">
            <div className="w-[10px]" />
            {timeline.map((item) => (
              <div key={item.name} className="w-[300px]">
                <time
                  dateTime={item.dateTime}
                  className="flex flex-col justify-start text-sm/6 font-semibold text-pink-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                    />
                  </svg>

                  <span className="ms-2">{item.date}</span>
                  <div
                    aria-hidden="true"
                    className="hidden md:absolute -ml-6 h-px w-screen -translate-x-full bg-white sm:-ml-4 lg:static lg:-mr-0 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </time>
                <p className="mt-6 text-lg/8 font-semibold tracking-tight text-white">
                  {item.name}
                </p>
                <p className="text-lg/8 tracking-tight font-bold text-pink-600">
                  {item.company}
                </p>
                <p className="mt-1 text-base/7 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
            <div className="w-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
