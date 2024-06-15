"use client";

import type { FC } from "react";
import { useState } from "react";

type StepsListProps = {
  currentStep: number;
};

const StepsList: FC<StepsListProps> = ({ currentStep }) => {
  const [steps, setStep] = useState({
    stepsItems: [
      "1- FACE ID",
      "2- Demande de passport",
      "3- Payement",
      "4- Génerer le ticket",
    ],
  });

  return (
    <div className="w-full md:px-0 mt-4">
      <ul
        aria-label="Steps"
        className="items-center text-custom-blue font-medium md:flex"
      >
        {steps.stepsItems.map((item, idx) => (
          <li
            aria-current={currentStep == idx + 1 ? "step" : false}
            className="flex gap-x-3 md:flex-col md:flex-1 md:gap-x-0"
          >
            <div className="h-8 flex justify-center items-center md:mb-3 md:h-auto">
              <h3
                className={`text-sm ${
                  currentStep == idx + 1
                    ? "text-custom-blue"
                    : "text-transparent"
                }`}
              >
                {item}
              </h3>
            </div>

            <div className="flex flex-col items-center md:flex-row md:flex-1">
              <hr
                className={`w-full border-4 hidden md:block ${
                  idx == 0
                    ? "border-none"
                    : "" || currentStep >= idx + 1
                    ? "border-custom-blue"
                    : ""
                }`}
              />
              <div
                className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
                  currentStep > idx + 1
                    ? "bg-custom-blue border-custom-blue"
                    : "" || currentStep == idx + 1
                    ? "border-custom-blue"
                    : ""
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full bg-custom-blue ${
                    currentStep != idx + 1 ? "hidden" : ""
                  }`}
                ></span>
                {currentStep > idx + 1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </div>
              <hr
                className={`h-12 border-4 md:w-full md:h-auto ${
                  idx + 1 == steps.stepsItems.length
                    ? "border-none"
                    : "" || currentStep > idx + 1
                    ? "border-custom-blue"
                    : ""
                }`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepsList;
