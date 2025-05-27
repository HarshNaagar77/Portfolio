import React from "react";
import img from "../assets/img.jpg";
import skills from "../assets/skillsimg.png";
import aboutimg from "../assets/aboutimg.avif";
import contactimg from "../assets/contactimg.jpg";

const Home = ({ darkMode }) => {
  return (
    <div className="mb-20">
      <img
        className="h-60 w-full object-cover mt-6 rounded-2xl"
        src={img}
        alt="Banner"
      />

      <div className="name text-xl mt-6 flex flex-wrap justify-between ml-4 mr-4 flex-col sm:flex-row sm:items-center">
        <div className="text-center sm:text-left mb-2 sm:mb-0">
          Hey, I'm <span className="font-bold">Harsh Naagar</span>
        </div>
        <div className="dev text-2xl sm:text-3xl text-center sm:text-right">
          Full stack developer
        </div>
      </div>

      {/* About Section */}
      <div className="rounded-xl mt-6 flex flex-wrap items-center gap-6 sm:gap-24 justify-between">
        <div
          className={`p-4 border rounded-xl sm:w-4/5 w-full ${
            darkMode ? "border-slate-800" : "border-gray-200"
          }`}
        >
          <h1 className="font-semibold">About me</h1>
          <p className="mt-2">
            As a full-stack developer, I’m passionate about creating elegant,
            scalable solutions that solve real-world problems. I focus on
            turning ideas into seamless digital experiences through clean code
            and thoughtful architecture. <br />
            These days, my work centers around projects built with Next.js and
            cutting-edge web technologies — delivering performance-driven and
            user-friendly applications. I’m always eager to explore new tools
            and approaches to keep pushing the boundaries of what’s possible.
          </p>
        </div>

        <div className="sm:block hidden">
          <img
            src={aboutimg}
            className="w-[150px] h-[150px] rounded-full object-cover mx-auto"
            alt="About"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="rounded-xl mt-6 flex flex-wrap items-center gap-6 sm:gap-24 justify-between">
        <div
          className={`p-4 border rounded-xl sm:w-4/5 w-full ${
            darkMode ? "border-slate-800" : "border-gray-200"
          }`}
        >
          <h1 className="font-semibold">Skills</h1>
          <ul className="list-disc pl-5 mt-2">
            <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li>JavaScript (ES6+), Python, Java, and C++</li>
            <li>SQL and database management</li>
          </ul>
        </div>

        <div className="sm:block hidden">
          <img
            src={skills}
            className="w-[150px] h-[150px] rounded-full object-cover mx-auto"
            alt="Skills"
          />
        </div>
      </div>

      {/* Connect Section */}
      <div className="rounded-xl mt-6 flex flex-wrap items-center gap-6 sm:gap-24 justify-between">
        <div
          className={`p-4 border rounded-xl sm:w-4/5 w-full ${
            darkMode ? "border-slate-800" : "border-gray-200"
          }`}
        >
          <h1 className="font-semibold">Connect With Me</h1>
          <ul className="list-none mt-2 space-y-2">
            <li>
              <i class="bi bi-envelope"></i> :{" "}
              <a href="mailto:hnaagar12@gmail.com" className="text-blue-700">
                hnaagar12@gmail.com
              </a>
            </li>
            <li>
              <i class="bi bi-github"></i> :{" "}
              <a
                href="https://github.com/HarshNaagar77"
                className="text-blue-700"
                target="_blank"
                rel="noreferrer"
              >
                HarshNaagar77
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:block hidden">
          <img
            src={contactimg}
            className="w-[150px] h-[150px] rounded-full object-cover mx-auto"
            alt="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
