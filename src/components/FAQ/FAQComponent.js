import React, { useState } from "react";
function FAQComponent() {
  const [question, setquestion] = useState(0);
  return (
    <div className="pt-16">
      <div className="container mx-auto pt-16 bg-gray-100">
        <div className="text-center pb-3 md:pb-10 xl:pb-20">
          <div className="flex justify-between">
            <div className="pl-10 sm:pl-10 md:pl-16 xl:pl-28">
              <h1 className="xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-700">
                FAQs
              </h1>
            </div>
            <div className="xs:pr-10 pr-16 sm:pr-10 md:pr-16 lg:pr-10 xl:pr-28">
              <div className="mb-10 ml-0 curor-pointer hover:cursor-pointer">
                <h2>View All</h2>
                <span className="inline-block w-9 h-1 rounded-full bg-green-700"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <ul>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                 These questions are already being taught at my campus. Should I enroll for this program ?
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
                <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                    While the subjects are taught at most campuses,the program adresses the fact that subjects in the curriculum
                    may not prepare you for the industry, and even if that happens, usually it is faculty specific and not entire domain.
                    The program ensures that even if some of the topics have not been offered in your curriculum {" "}
                </p>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                 This seems to be high intensity program. Will i be able to do justice to this along with my other works?
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
                <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event. Greatest appreciation to you
                  and your team for the outstanding job you did for us. The
                  website is just what we wanted, and we were thrilled with the
                  speed your team exercised.{" "}
                </p>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                I have already done/ doing certain levels of CFA. Should I enroll for this program?
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
                <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event. Greatest appreciation to you
                  and your team for the outstanding job you did for us. The
                  website is just what we wanted, and we were thrilled with the
                  speed your team exercised.{" "}
                </p>
              )}
            </li>
            <li className="py-6 border-gray-200 border-solid border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                 When will the live sessions be conducted?
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
                <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event. Greatest appreciation to you
                  and your team for the outstanding job you did for us. The
                  website is just what we wanted, and we were thrilled with the
                  speed your team exercised.{" "}
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FAQComponent;
