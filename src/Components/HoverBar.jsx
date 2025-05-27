// HoverBar.js
import React from 'react';
import CustomCursor from './CustomCursor';

const HoverBar = ({ setRender }) => {
  return (
    <div className="bottom-5 sm:left-[38vw] left-5 border border-gray-300 sm:w-88 pr-7 pl-7 w-88 rounded-2xl bg-white fixed z-50 shadow-xl">
      <CustomCursor />
      <ul className="mainul flex p-3 justify-between">
        <li className="home" onClick={() => setRender("Home")}>
          <i className="bi bi-house"></i>
        </li>
        |
        <li className="skills" onClick={() => setRender("Skills")}> 
          <i className="bi bi-stars"></i>
        </li>
        |
        <li className="aboutHover" onClick={() => setRender("About")}>
          <i className="bi bi-file-person"></i>
        </li>
        |
        <li className="Projects" onClick={() => setRender("Projects")}>
          <i class="bi bi-archive"></i>
        </li>|
        <li className="Contact" onClick={() => setRender("Contact")}>
          <i class="bi bi-phone"></i>
        </li>
      </ul>
    </div>
  );
};

export default HoverBar;
