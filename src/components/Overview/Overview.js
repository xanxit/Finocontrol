import React from 'react'

export default function Overview() {
    return (
      <div>
        <div className="flex justify-evenly flex-wrap">
          <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded mx-8 mb-8 flex-1 md:mb-0  md:w-1/3 sm:flex-initial">
            <h1 className="text-indigo-500 text-4xl my-4  ">Lorem Ipsum</h1>
            <p className=" text-justify px-8 mb-8  ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores molestias, molestiae ex autem dicta nulla blanditiis
              architecto cumque repudiandae quam quia impedit rerum optio
              consectetur commodi pariatur nam eveniet dolores!
            </p>
          </div>
          <div className="flex flex-col justify-between mx-8 md:mx-0 md:w-1/4 ">
            <div className="flex flex-col bg-white rounded p-4 items-center shadow-lg border-r-8 border-red-400 mb-4 md:mb-auto">
              <h2 className="font-bold   ">Lorem Ipsum</h2>
              <p className="p-4  text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                doloribus quia voluptates maxime totam illum iure, quis...
              </p>
              <div className="flex  justify-between ">
                <div className="pill bg-gray-400 rounded-full px-4 text-xs mr-2  py-1">
                  #NodeJS
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded p-4 items-center shadow-lg border-r-8 border-red-400">
              <h2 className="font-bold">Lorem Ipsum</h2>
              <p className="p-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                doloribus quia voluptates maxime totam illum iure, quis...
              </p>
              <div className="flex justify-between ">
                <div className="pill bg-gray-400 rounded-full text-xs px-4 py-1 mr-2">
                  #Express
                </div>
                <div className="pill bg-gray-400 rounded-full text-xs px-4 py-1 mr-2">
                  #TailwindCSS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
