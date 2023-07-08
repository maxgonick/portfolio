import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="relative lg:h-screen overflow-hidden text-left max-w-full px-10 justify-between mx-auto items-center">
      <div className="flex flex-col mt-[7rem] gap-8">
        <motion.div
          className=" top-32 left-14 tracking-[5px] sm:tracking-[10px] text-[#9CA3AF] text-md sm:text-2xl border-[#0956EF] border-l-2 px-3"
          initial={{
            x: -200,
            opacity: 1,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >
          Relevent Experience
        </motion.div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row px-4 py-4 gap-6 max-w-[80%]">
            <div className="tracking-wide text-xs text-slate-500 uppercase font-semibold w-[20%] shrink-0 whitespace-nowrap">
              April 2022 - Present
            </div>
            <div className="flex flex-col text-slate-200 hover:text-teal-300">
              <div>
                <Link href="https://www.linkedin.com/company/la-elder-law/">
                  <span className="text-sm whitespace-nowrap">
                    Software Engineering Intern &middot;{" "}
                    <span>
                      LA Elder Law{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-up-right h-3 w-3 shrink-0 inline-block transition-transform"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
              <ul className="text-xs text-slate-400 mt-1 list-disc">
                <li>
                  Managed performance and integrity of over 8000 client records
                  stored in a Relational Database using SQL.
                </li>
                <li>
                  Redesigned front-end to update outdated components with custom
                  queries, forms, and reports to generate clear and coherent
                  data presentation and efficient data retrieval and processing
                  in a custom GUI used daily internally.
                </li>
                <li>
                  Advised and diagnosed application UI and data management
                  workflow with management to create actionable tickets which
                  led to a 50% reduction in time to complete client lookups and
                  analysis by reducing unnecessary workflow steps
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row px-4 py-4 gap-6 max-w-[80%]">
            <div className="tracking-wide text-xs text-slate-500 uppercase font-semibold w-[20%] shrink-0 whitespace-nowrap">
              Jan - Apr 2023
            </div>
            <div className="flex flex-col text-slate-200 hover:text-teal-300">
              <div>
                <Link href="https://github.com/kalcow/mapify">
                  <span className="text-sm whitespace-nowrap">
                    Full-Stack Developer &middot;{" "}
                    <span>
                      Creative Labs{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-up-right h-3 w-3 shrink-0 inline-block"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
              <ul className="text-xs text-slate-400 mt-1 list-disc">
                <li>
                  Engineered React Native mobile app that generates music based
                  on nearby listeners, and allows users to create listening
                  rooms and share music through spearheading system design plans
                  and programming alongside team of 12 developers
                </li>
                <li>
                  Implemented listening rooms using Node.js and PostgreSQL to
                  communicate with Spotify API and efficiently query persistent
                  room data, and reduced room connection latency by 85% by
                  leveraging Redis as a caching layer
                </li>
                <li>
                  Increased average session length by 5 seconds using React
                  Native and Typescript to create responsive front-end screens
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row px-4 py-4 gap-6 max-w-[80%]">
            <div className="tracking-wide text-xs text-slate-500 uppercase font-semibold w-[20%] shrink-0 whitespace-nowrap">
              Aug 2022 - April 2023
            </div>
            <div className="flex flex-col text-slate-200 hover:text-teal-300">
              <div>
                <Link href="https://github.com/maxgonick/ucla-crafting-for-cancer">
                  <span className="text-sm whitespace-nowrap">
                    Front-End Developer &middot;{" "}
                    <span>
                      Crafting for Cancer{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-up-right h-3 w-3 shrink-0 inline-block"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
              <ul className="text-xs text-slate-400 mt-1 list-disc">
                <li>
                  Constructed and maintained a responsive multipage website
                  using HTML, CSS, and JavaScript over a 2 week deadline
                </li>
                <li>
                  Updated website with Next.js to allow for quicker deployment
                  and greater maintainability, and reimplemented front-end
                  components with React and TypeScript for increased user
                  interactions and a modular component system.
                </li>
                <li>
                  Deployed tool used by over 1000 monthly users displaying
                  important club information and forms for club internals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
