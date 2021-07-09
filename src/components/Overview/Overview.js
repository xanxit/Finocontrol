import React from 'react'

export default function Overview() {
    return (
      <div>
        <div className="flex justify-between">
          <div className="flex flex-col p-10 mr-20 bg-gray-200 bg-opacity-20 shadow-lg rounded mx-8 mb-8 flex-1 md:mb-0  md:w-1/2 sm:w-1/3 sm:flex-initial ">
            <h1 className="text-green-700 text-4xl my-4 mb-10  ">Overview</h1>
            <p className="mb-8 ">
              <span className="text-lg font-bold">
                Program Duration: 15th Jan 2021-31st May 2021
              </span>
              <br />
              Register Now !!!
              <br />
              <br />
              The following courses are the part of the program
              <br />
              <br />
              <span className="text-lg font-semibold">4 mandatory courses</span>
              <br />
              <br />
              <li>Applied Financial Statement Analysis</li>
              <li>Equity valuation certification</li>
              <li>Investment banking certifcation</li>
              <li>Credit Analysis Certification</li>
              <br />
              <br />
              <span className="text-lg font-semibold">
                2 Optional courses(any 2)
              </span>
              <li>Financial Modeling Certifcation</li>
              <li>Applied Derivatives Certification</li>
              <li>Applied Economics Certifcation</li>
              <li>Finance Essentials - Banking & Markets Certification</li>
              <br />
              <br />
              Each mandatory course will have:
              <li>1 certifcation test</li>
              <li>1 live project</li>
            </p>
          </div>
          <div className="flex flex-col justify-between mx-8 md:mx-0 md:opacity-0 lg:opacity-100 md:w-1/4 ">
            <div className="flex flex-col bg-green-800 bg-opacity-10 rounded p-4  shadow-lg  mb-4 md:mb-auto">
              <h2 className="font-bold   ">This Course includes </h2>
              <ul>
                <div className="p-8 flex flex-wrap justify-start text-gray-600">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>
                  <div className="pl-2 font-bold text-green-900 ">
                    70 hours of videos|10 hours
                  </div>
                </div>
              </ul>
              <ul>
                <div className="p-8 flex flex-wrap justify-start text-gray-600">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="pl-2 font-bold text-green-900">
                    About 150 hours of effort
                  </div>
                </div>
              </ul>
              <ul>
                <div className="p-8 flex flex-wrap justify-start text-gray-600">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="pl-2 font-bold text-green-900">
                    100+ articles,case studies
                  </div>
                </div>
              </ul>
              <ul>
                <div className="p-8 flex flex-wrap justify-start text-gray-600">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="pl-2 font-bold text-green-900">
                    Self evaluation test
                  </div>
                </div>
              </ul>
              <ul>
                <div className="p-8 flex flex-wrap justify-start text-gray-600">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="pl-2 font-bold text-green-900">
                    4 live projects
                  </div>
                </div>
              </ul>
              <ul>
                <div className="p-8 flex flex-wrap justify-start text-gray-600">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div className="pl-3 font-bold text-green-900">
                    Certification Test
                  </div>
                </div>
              </ul>
              <ul>
                <div className="p-8 flex flex-wrap justify-start text-gray-600">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="pl-3 font-bold text-green-900">
                    4 live projects
                  </div>
                </div>
              </ul>
              <ul>
                <div className="p-8 flex flex-wrap justify-start text-gray-600">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="pl-3 font-bold text-green-900">
                    1 year access
                  </div>
                </div>
              </ul>
            </div>
            <div className="flex flex-col bg-white rounded p-4 items-center shadow-lg border-r-8 border-red-400">
              <button className="transition duration-500 border-1 text-lg h-12 w-80 bg-white hover:bg-red-500 hover:text-white text-red-500 mt-2 px-3 rounded-md">
                <div>Download Course Brouchre</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
