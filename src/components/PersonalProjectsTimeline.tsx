import React from "react";

const timeline = [
  {
    company: "DashG Enterprises",
    description:
      "I co-founded DashG to simplify and streamline how teams deploy and manage their cloud infrastructure. With a background in software development and DevOps, I set out to build an opinionated platform that unites Kubernetes, Terraform, and modern development tooling into a seamless workflow.\nFrom day one, I’ve helped shape the product vision, design the architecture, and build features — all while wearing the many hats that come with founding a startup. I’ve guided DashG from concept to reality, delivering intuitive, scalable solutions that help teams ship faster, more reliably, and with complete confidence in their infrastructure.",
  },
  {
    company: "T.A.I.",
    description:
      "I was a founding engineer at T.A.I., where I helped create an AI-powered tutoring app designed to support college students. From the ground up, I worked on building engaging, effective learning experiences — designing features, architecting systems, and ensuring the product was both scalable and intuitive. My role combined hands-on engineering with product thinking, allowing me to shape the core user journey and deliver a platform that made personalized, on-demand academic help accessible to students everywhere.",
  },
  {
    company: "Booster Tickets",
    description:
      "I was a front-end engineer and designer for Booster Tickets, a ticketing platform built exclusively for high school sports — like a niche Ticketmaster tailored to local athletics. I designed and developed user-friendly interfaces that made it easy for fans, families, and communities to purchase and manage event tickets online. My work blended clean, intuitive design with performant, responsive code, ensuring a seamless experience across devices and helping schools modernize the way they handled ticket sales.",
  },
];

export default function PersonalProjectsTimeline() {
  return (
    <div className="bg-[#222222] opacity-[.98] p-8 w-screen flex justify-center">
      <div className="max-w-7xl">
        <h2 className="text-3xl font-bold mb-4">Independent Projects</h2>

        <div className="mx-auto max-w-7xl overflow-x-auto w-screen">
          <div className="flex flex-col w-fit h-fit gap-4 items-center">
            {timeline.map((item) => (
              <div
                key={item.company}
                className="w-[80%] border-pink-600 border rounded-lg p-4"
              >
                <p className="text-lg/8 font-semibold tracking-tight text-white"></p>
                <p className="text-lg/8 tracking-tight font-bold text-pink-600">
                  {item.company}
                </p>
                <p className="mt-1 text-base/7 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
            <div className="w-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
