import React from "react";
// import NavLinks from "../Nav_links/nav_links.component";
// import "./navbar.style.css";

let isOpen = false;

const Toggle1 = (y, x) => {
  y.style.display = "none";
  x[0].style.transform = "none";
  x[1].style.opacity = "100";
  x[2].style.transform = "none";
  isOpen = false;
};
const Toggle2 = (y, x) => {
  y.style.display = "block";
  y.style.animation = "fade-in 1s ease-in";
  x[0].style.transform = "rotate(-45deg) translate(-5px,6px)";
  x[0].style.transition = "transform 0.4s ease-in";
  x[1].style.opacity = "0";
  x[1].style.transition = "opacity 0.2s ease-in";
  x[2].style.transform = "rotate(45deg) translate(-5px,-6px)";
  x[2].style.transition = "transform 0.4s ease-in";
  isOpen = true;
};

const handleClick = () => {
  const y = document.getElementById("drop-down");
  const x = document.getElementById("nav_parent").children;
  isOpen ? Toggle1(y, x) : Toggle2(y, x);
};

const Navbar = () => (
  <div className="block bg-gray-200">
    <div className="hidden sm:flex text-lg py-3" id="lol">
      {/* <NavLinks /> */}
      <div>
        <a className="px-4 md:px-8 underline lg:px-10  block sm:inline-block" href="#top">
          Overview
          
        </a>
        
        <a
          className="px-4 md:px-8 lg:px-10  block sm:inline-block"
          href="#courses"
        >
          Instructor
        </a>
        <a
          className="px-4 md:px-8 lg:px-10  block sm:inline-block"
          href="#webinar"
        >
          Benefits
        </a>
        <a
          className="px-4 md:px-8 lg:px-10  block sm:inline-block"
          href="#company"
        >
          Requirements
        </a>
        <a
          className="px-4 md:px-8 lg:px-10  block sm:inline-block"
          href="#bottom"
        >
          Content
        </a>
        <a
          className="px-4 md:px-8 lg:px-10  block sm:inline-block"
          href="#bottom"
        >
          Brochure
        </a>
        <a
          className="px-4 md:px-8 lg:px-10  block sm:inline-block"
          href="#bottom"
        >
          FAQ
        </a>
      </div>
    </div>

    <div
      className="hidden sm:hidden text-green-900 text-lg py-3"
      id="drop-down"
    >
      {/* <NavLinks /> */}
      <div>
        <a className="px-4 md:px-8 lg:px-10  block sm:inline-block" href="#top">
          Overview
        </a>
        <a
          className="px-4 md:px-8 lg:px-10  block sm:inline-block"
          href="#courses"
        >
          Instructor
        </a>
        <a
          className="px-4 md:px-8 lg:px-10  block sm:inline-block"
          href="#webinar"
        >
          Benefits
        </a>
        <a
          className="px-4 md:px-8 lg:px-10  block sm:inline-block"
          href="#company"
        >
          Requirement
        </a>
        <a
          className="px-4 md:px-8 lg:px-10  block sm:inline-block"
          href="#bottom"
        >
          Content
        </a>
      </div>
    </div>
  </div>
);

export default Navbar;
