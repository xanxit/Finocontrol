import React from 'react'

export default function FooterComponent() {
    return (
      <div>
        <footer className="footer bg-gray-100 relative pt-1 border-b-2 border-green-500">
          <div className="container mx-auto px-6 py-12">
            <div className="sm:flex sm:mt-8">
              <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-700 uppercase mb-2">
                    Courses
                  </span>
                  <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col mr-12">
                      <span className="my-2">
                        <a
                          href="#"
                          className="text-green-500  text-md hover:text-green-500"
                        >
                          Applied Economics Certification
                        </a>
                      </span>
                      <span className="my-2">
                        <a
                          href="#"
                          className="text-green-500  text-md hover:text-green-500"
                        >
                          The Art of Stock Picking
                        </a>
                      </span>
                      <span className="my-2">
                        <a
                          href="#"
                          className="text-green-500  text-md hover:text-green-500"
                        >
                          Credit Analysis Certification
                        </a>
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="my-2">
                        <a
                          href="#"
                          className="text-green-500  text-md hover:text-green-500"
                        >
                          Applied Economics Certification
                        </a>
                      </span>
                      <span className="my-2">
                        <a
                          href="#"
                          className="text-green-500  text-md hover:text-green-500"
                        >
                          The Art of Stock Picking
                        </a>
                      </span>
                      <span className="my-2">
                        <a
                          href="#"
                          className="text-green-500  text-md hover:text-green-500"
                        >
                          Credit Analysis Certification
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mr-20">
                  <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                   Combo Courses
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-green-500 text-md hover:text-green-500"
                    >
                      link 1
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-green-500  text-md hover:text-green-500"
                    >
                      link 1
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-green-500 text-md hover:text-green-500"
                    >
                      link 1
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}
