import React, { useState, useEffect } from 'react';
import pro1 from '../assets/pro1.png';
import pro2 from '../assets/game.png';
import pro3 from '../assets/weather.png';
import pro4 from '../assets/car.png';
import pro5 from '../assets/movie.png';
import pro6 from '../assets/odd.png';

const Projects = () => {
  const [loading, setLoading] = useState(true);

  const [imagesLoaded, setImagesLoaded] = useState({
    pro1: false,
    pro2: false,
    pro3: false,
    pro4: false,
    pro5: false,
    pro6: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (key) => {
    setImagesLoaded((prev) => ({ ...prev, [key]: true }));
  };

  const SkeletonCard = () => (
    <div className="mt-6 w-full sm:w-[100%]  animate-pulse space-y-4">
      <div className="h-40 pt-5 sm:h-56 w-full rounded-2xl bg-gray-300 shadow-xl"></div>
      <div className="h-6 pt-3  w-3/4 bg-gray-300 rounded"></div>
      <div className="h-4 w-full bg-gray-300 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
    </div>
  );

  const imageClass = (loaded) =>
    `w-full sm:h-56 h-40 object-cover object-top rounded-2xl shadow-md transition-opacity duration-700 ease-in-out ${
      loaded ? 'opacity-100' : 'opacity-0'
    }`;

  return (
    <div>
      <h1 className="anton text-3xl mt-6">Projects I Created :</h1>

      <div className="grid gap-6 sm:gap-8 lg:gap-10 mb-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
            <a
              href="https://github.com/HarshNaagar77/StayScout"
              className="mt-6 text-justify hover:scale-105 transition-all cursor-pointer"
            >
              <img
                src={pro1}
                alt=""
                className={imageClass(imagesLoaded.pro1)}
                onLoad={() => handleImageLoad('pro1')}
              />
              <h1 className="text-xl font-semibold mt-3 pl-1 border-b pb-3">
                StayScout
              </h1>
              <p className="pl-1 mt-2 ">
                A full-stack app to connect users with hosts for booking stays.
                Includes listings, secure bookings, Stripe payments, and a
                responsive UI.
              </p>
              <p className="pl-1">
                <span className="font-semibold">Tech Stack : </span>
                React, Node.js, Express, MongoDB, Stripe
              </p>
            </a>

            <a
              href="https://github.com/HarshNaagar77/Gamesnest"
              className="mt-6 text-justify hover:scale-105 transition-all cursor-pointer"
            >
              <img
                src={pro2}
                alt=""
                className={imageClass(imagesLoaded.pro2)}
                onLoad={() => handleImageLoad('pro2')}
              />
              <h1 className="text-xl font-semibold mt-3 pl-1 border-b pb-3">
                GamesNest
              </h1>
              <p className="pl-1 mt-2">
                A web platform offering gaming subscriptions with access to a
                curated collection of games. Users can a gaming
                experience through a responsive interface.
              </p>
              <p className="pl-1">
                <span className="font-semibold">Tech Stack : </span>
                React, Node.js, Express, MongoDB
              </p>
            </a>

            <a
              href="https://github.com/HarshNaagar77/WeatherApp-Glassmorphism-"
              className="mt-6 text-justify hover:scale-105 transition-all cursor-pointer"
            >
              <img
                src={pro3}
                alt=""
                className={imageClass(imagesLoaded.pro3)}
                onLoad={() => handleImageLoad('pro3')}
              />
              <h1 className="text-xl font-semibold mt-3 pl-1 border-b pb-3">
                WeatherWizard
              </h1>
              <p className="pl-1 mt-2">
                A responsive weather app with a modern glassmorphism design that
                shows real-time weather using the OpenWeather API.
              </p>
              <p className="pl-1">
                <span className="font-semibold">Tech Stack : </span>
                Html, React, Javascript, OpenApi
              </p>
            </a>

            <a
              href="https://github.com/HarshNaagar77/Car-website-Frontend-"
              className="mt-6 text-justify hover:scale-105 transition-all cursor-pointer"
            >
              <img
                src={pro4}
                alt=""
                className={imageClass(imagesLoaded.pro4)}
                onLoad={() => handleImageLoad('pro4')}
              />
              <h1 className="text-xl font-semibold mt-3 pl-1 border-b pb-3">
                Horizon
              </h1>
              <p className="pl-1 mt-2">
                A modern, responsive website showcasing the Horizon car's design
                and features with smooth animations and a clean aesthetic.
              </p>
              <p className="pl-1">
                <span className="font-semibold">Tech Stack : </span>
                Html, React, Javascript, Gsap
              </p>
            </a>

            <a
              href="https://github.com/HarshNaagar77/MovieSphere"
              className="mt-6 text-justify hover:scale-105 transition-all cursor-pointer"
            >
              <img
                src={pro5}
                alt=""
                className={imageClass(imagesLoaded.pro5)}
                onLoad={() => handleImageLoad('pro5')}
              />
              <h1 className="text-xl font-semibold mt-3 pl-1 border-b pb-3">
                Movie Sphere
              </h1>
              <p className="pl-1 mt-2">
                Movie Sphere is a user-friendly movie database app to browse
                films, ratings, and reviews with a clean, modern design.
              </p>
              <p className="pl-1">
                <span className="font-semibold">Tech Stack : </span>
                React , Express , Node , Open Api
              </p>
            </a>

            <a
              href="https://github.com/HarshNaagar77/Project_Odyssey"
              className="mt-6 text-justify hover:scale-105 transition-all cursor-pointer"
            >
              <img
                src={pro6}
                alt=""
                className={imageClass(imagesLoaded.pro6)}
                onLoad={() => handleImageLoad('pro6')}
              />
              <h1 className="text-xl font-semibold mt-3 pl-1 border-b pb-3">
                Odyssey
              </h1>
              <p className="pl-1 mt-2">
                Odyssey is a web app that streamlines managing rental cars and
                trip bookings with an intuitive, efficient and simple
                interface.
              </p>
              <p className="pl-1">
                <span className="font-semibold">Tech Stack : </span>
                React , Express , Node , Mongo db
              </p>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
