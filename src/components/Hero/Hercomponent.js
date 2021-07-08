import React from "react";

function HeroComponent() {
  return (
    <div>
      <div>
        <div className="">
          <img
            src="https://scontent.fknu1-1.fna.fbcdn.net/v/t1.6435-9/196889588_331537105265909_1556344469090237794_n.png?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=X5egTUqfPCMAX9Hit5i&_nc_ht=scontent.fknu1-1.fna&oh=7f03c558eb5b0a1b313c77430c77ef31&oe=60ED15BD"
            alt="Images"
            className="rounded-br-large z-50 w-auto h-auto"
          />
        </div>
        <div className="relative">
          <div className="text-green-400 bg-white flex md:flex-row flex-col box-border justify-items-center items-center px-4 -mt-18 rounded-lg">
            <div className="md:inline-flex items-center align-middle">
              <div className="lg:border-r-2 lg:py-0 py-1 border-green-400 px-2">
                BANKING
              </div>
              <div className="lg:border-r-2 lg:py-0 py-1 border-green-400 px-2">
                CAPITAL MARKETS
              </div>
              <div className="lg:border-r-2 lg:py-0 py-1 border-green-400 px-2">
                CREDIT
              </div>
              <div className="lg:border-r-2 lg:py-0 py-1 border-green-400 px-2">
                VALUATION
              </div>
            </div>
            <div className="flex items-center align-middle">
              <div className="text-black text-xl lg:px-32 lg:py-0 py-1">
                Rs. 29,000{" "}
                <span className="font-light text-sm">/Incl Taxes</span>
              </div>
            </div>
            <button>
              <div className="bg-green-500 text-white px-3 py-2 rounded-br-md rounded-tl-md lg:py-2">
                Registration Closed
                <span className="inline-flex mx-1 px-1 py-1">
                  <img
                    src="https://image.flaticon.com/icons/png/512/271/271226.png"
                    alt="Arrow"
                    className="h-5 w-5"
                  />
                </span>
              </div>
            </button>
            <div className="mx-12 border-r-2 border-opacity-60 lg:py-0 py-1"></div>
            <div className="">
              <span className="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmA1_fcMRhXhW7aCGkdirxnwy8oUpGhI8uwA&usqp=CAU"
                  alt="receive"
                  className="h-12 w-12"
                />
              </span>
              Request a Call
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
