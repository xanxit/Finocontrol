import React, { useState } from "react";
function FAQComponent() {
  const [question, setquestion] = useState(0);
  return (
    <div className="pt-16">
      <div className="container mx-auto pt-16 bg-gray-100">
        <div className=" pb-3 md:pb-10 xl:pb-20">
          <div className="pl-10 sm:pl-10 md:pl-16 xl:pl-28">
            <h2 className="xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-700">
              Course Content
            </h2>
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <ul>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-evenly items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                  Applied Financial Statement Analysis Certification
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 0 ? setquestion(null) : setquestion(0)
                  }
                >
                  {question === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 0 && (
                <div className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  <div className="flex flex-wrap justify-evenly">
                    <div className="pl-10 sm:pl-10 md:pl-16 xl:pl-28">
                      <h2 className="xl:px-0 xl:text-xl md:text-2xl text-xl font-bold text-gray-700">
                        Check the Course Details
                      </h2>
                    </div>
                    <div className="xs:pr-10 sm:pr-10 md lg:pr-10 xl:pr-28">
                      <div className="mb-10 ml-0 curor-pointer hover:cursor-pointer">
                        <h2 class="text-base text-white font-light inline rounded px-4 py-2 tracking-wide uppercase cursor-pointer bg-green-600 opacity-50">
                          Download
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-evenly items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                  Equity Valuation Certification (mandatory)
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 1 ? setquestion(null) : setquestion(1)
                  }
                >
                  {question === 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 1 && (
                <div className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  <div className="flex flex-wrap justify-evenly">
                    <div className="pl-10 sm:pl-10 md:pl-16 xl:pl-28">
                      <h2 className="xl:px-0 xl:text-xl md:text-2xl text-xl font-bold text-gray-700">
                        Check the Course Details
                      </h2>
                    </div>
                    <div className="xs:pr-10 sm:pr-10 md lg:pr-10 xl:pr-28">
                      <div className="mb-10 ml-0 curor-pointer hover:cursor-pointer">
                        <h2 class="text-base text-white font-light inline rounded px-4 py-2 tracking-wide uppercase cursor-pointer bg-green-600 opacity-50">
                          Download
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-evenly items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                  Investment Banking Certification(mandatory)
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 2 ? setquestion(null) : setquestion(2)
                  }
                >
                  {question === 2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 2 && (
                <div className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  <div className="flex flex-wrap justify-evenly">
                    <div className="pl-10 sm:pl-10 md:pl-16 xl:pl-28">
                      <h2 className="xl:px-0 xl:text-xl md:text-2xl text-xl font-bold text-gray-700">
                        Check the Course Details
                      </h2>
                    </div>
                    <div className="xs:pr-10 sm:pr-10 md lg:pr-10 xl:pr-28">
                      <div className="mb-10 ml-0 curor-pointer hover:cursor-pointer">
                        <h2 class="text-base text-white font-light inline rounded px-4 py-2 tracking-wide uppercase cursor-pointer bg-green-600 opacity-50">
                          Download
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-evenly items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                  Credit Analysis Certification (mandatory)
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 3 ? setquestion(null) : setquestion(3)
                  }
                >
                  {question === 3 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 3 && (
                <div className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  <div className="flex flex-wrap justify-evenly">
                    <div className="pl-10 sm:pl-10 md:pl-16 xl:pl-28">
                      <h2 className="xl:px-0 xl:text-xl md:text-2xl text-xl font-bold text-gray-700">
                        Check the Course Details
                      </h2>
                    </div>
                    <div className="xs:pr-10 sm:pr-10 lg:pr-10 xl:pr-28">
                      <div className="mb-10 ml-0 curor-pointer hover:cursor-pointer">
                        <h2 class="text-base text-white font-light inline rounded px-4 py-2 tracking-wide  cursor-pointer bg-green-600 opacity-50">
                          Download
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-evenly items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                 Applied Derivatives Certification (Optional)
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    question === 4 ? setquestion(null) : setquestion(4)
                  }
                >
                  {question === 4 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Close"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="Open"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 4 && (
                <div className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  <div className="flex flex-wrap justify-evenly">
                    <div className="pl-10 sm:pl-10 md:pl-16 xl:pl-28">
                      <h2 className="xl:px-0 xl:text-xl md:text-2xl text-xl font-bold text-gray-700">
                        Check the Course Details
                      </h2>
                    </div>
                    <div className="xs:pr-10 sm:pr-10 md lg:pr-10 xl:pr-28">
                      <div className="mb-10 ml-0 curor-pointer hover:cursor-pointer">
                        <h2 class="text-base text-white font-light inline rounded px-4 py-2 tracking-wide uppercase cursor-pointer bg-green-600 opacity-50">
                          Download
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="transition duration-500 border-1 text-lg h-12 w-80 bg-white border-2 hover:bg-red-500 hover:text-white text-red-500 mt-2 px-3 rounded-md">
          <div>Download Course Brouchre</div>
        </button>
      </div>
    </div>
  );
}

export default FAQComponent;
