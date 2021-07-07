import React from 'react'

export default function InstructorComponent() {
    return (
      <div>
        <div className="max-w-md mx-auto bg-white rounded-xl mt-20 mb-20 shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://dummyimage.com/460x500"
                alt="A person"
              />
            </div>
            <div className="flex flex-wrap justify-evenly">
              <div className="pl-7 pt-16">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Designation
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Name of Trainer
                </a>
              </div>
              <div className="mt-2 pt-16 pl-20 text-gray-500">
                Details about the trainer
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
