import React from "react";
import { useEffect, useRef, useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";

const sections = [
  {
    id: "about-me",
    title: "About Me",
  },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  // { id: "blog", title: "Blog" },
  { id: "contact", title: "Contact" },
];

function MenuIcon({
  open,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & {
  open: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d={open ? "M17 7 7 17M7 7l10 10" : "m15 16-3 3-3-3M15 8l-3-3-3 3"}
      />
    </svg>
  );
}

export function NavBar() {
  const navBarRef = useRef<React.ElementRef<"div">>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const mobileActiveIndex = activeIndex === null ? 0 : activeIndex;

  useEffect(() => {
    function updateActiveIndex() {
      if (!navBarRef.current) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let newActiveIndex: any = null;
      const elements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      const bodyRect = document.body.getBoundingClientRect();
      const offset = bodyRect.top + navBarRef.current.offsetHeight + 1;
      if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
        setActiveIndex(sections.length - 1);
        return;
      }

      for (let index = 0; index < elements.length; index++) {
        if (
          window.scrollY >=
          elements[index].getBoundingClientRect().top - offset
        ) {
          newActiveIndex = index;
        } else {
          break;
        }
      }

      setActiveIndex(newActiveIndex);
    }

    updateActiveIndex();

    window.addEventListener("resize", updateActiveIndex);
    window.addEventListener("scroll", updateActiveIndex, { passive: true });

    return () => {
      window.removeEventListener("resize", updateActiveIndex);
      window.removeEventListener("scroll", updateActiveIndex);
    };
  }, []);

  return (
    <div ref={navBarRef} className="sticky top-0 z-50">
      <Popover className="sm:hidden">
        {({ open }) => (
          <>
            <div
              className={clsx(
                "relative flex items-center px-4 py-3",
                !open &&
                  "bg-[#222222]/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-[#222222]/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur"
              )}
            >
              {!open && (
                <>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-pink-600"
                  >
                    {(mobileActiveIndex + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="ml-4 text-base font-medium text-white">
                    {sections[mobileActiveIndex].title}
                  </span>
                </>
              )}
              <PopoverButton
                className={clsx(
                  "-mr-1 ml-auto flex h-8 w-8 items-center justify-center",
                  open && "relative z-10"
                )}
                aria-label="Toggle navigation menu"
              >
                {!open && (
                  <>
                    {/* Increase hit area */}
                    <span className="absolute inset-0" />
                  </>
                )}
                <MenuIcon open={open} className="h-6 w-6 stroke-slate-700" />
              </PopoverButton>
            </div>
            <PopoverPanel className="absolute inset-x-0 top-0 bg-[#222222]/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-[#222222]/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
              {sections.map((section, sectionIndex) => (
                <PopoverButton
                  as="a"
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center px-4 py-1.5"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-pink-600"
                  >
                    {(sectionIndex + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="ml-4 text-base font-medium text-white">
                    {section.title}
                  </span>
                </PopoverButton>
              ))}
            </PopoverPanel>
            <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-[#222222]" />
          </>
        )}
      </Popover>
      <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200 sm:bg-[#222222]/95 sm:[@supports(backdrop-filter:blur(0))]:bg-[#222222]/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <div className="w-7/12 flex flex-col justify-center ms-4">
          <h2 className="text-xl md:text-6xl text-white text-fira-code font-bold">
            Brandy Garland
          </h2>
        </div>
        <ol
          role="list"
          className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-white [counter-reset:section]"
        >
          {sections.map((section, sectionIndex) => (
            <li key={section.id} className="flex [counter-increment:section]">
              <a
                href={`#${section.id}`}
                className={clsx(
                  "flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]",
                  sectionIndex === activeIndex
                    ? "border-pink-600 text-pink-600 before:text-pink-600 font-bold"
                    : "border-transparent before:text-pink-600 hover:bg-blue-50/40 hover:before:text-white"
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
