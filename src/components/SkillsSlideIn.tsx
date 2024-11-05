import { motion } from "framer-motion";
import { skills } from "../data/Skills";

export function SkillsSlideIn() {
  const categoryList = new Set();

  skills.forEach((datum) => {
    categoryList.add(datum.category);
  });

  return (
    <>
      <div aria-hidden="true" className="relative h-full">
        <div className="my-1 px-2 m-2 mt-2">
          {skills.map((row, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: "200%" }}
                animate={{ opacity: 1, x: 0 }}
                key={index + row.name}
                className="m-1 rounded-full bg-gradient-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-inset ring-white/10 inline-grid grid-cols-[1rem,1fr] items-center gap-2 whitespace-nowrap px-3"
              >
                <img alt="" src={row.logo} className="size-4" />
                <span className="text-sm/6 font-medium text-white">
                  {row.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
