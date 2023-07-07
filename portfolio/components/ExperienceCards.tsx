import React from "react";
import Image from "next/image";

type Props = {};

const ExperienceCards = (props: Props) => {
  return (
    <div className="flex px-4 py-4 gap-6">
      <div className="tracking-wide text-xs text-slate-500 uppercase font-semibold ">
        April 2022 - Present
      </div>
      <div className="flex flex-col text-slate-200">
        <div>
          <span className="text-sm whitespace-nowrap">
            Software Engineering Intern &middot;{" "}
            <span>
              LA Elder Law
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right h-4 w-4 shrink-0 inline-block"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
            </span>
          </span>
        </div>
        <ul className="text-xs text-slate-400">
          <li>
            - Managed performance and integrity of over 8000 client records
            stored in a Relational Database using SQL.
          </li>
          <li>
            - Redesigned front-end to update outdated components with custom
            queries, forms, and reports to generate clear and coherent data
            presentation and efficient data retrieval and processing in a custom
            GUI used daily internally.
          </li>
          <li>
            - Advised and diagnosed application UI and data management workflow
            with management to create actionable tickets which led to a 50%
            reduction in time to complete client lookups and analysis by
            reducing unnecessary workflow steps
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCards;
