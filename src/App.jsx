import React, { useState, useEffect } from 'react';
import LoadingBar from './Components/LoadingBar';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import HoverBar from './Components/HoverBar';
import Skills from './Components/Skills';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  const [render, setRender] = useState('Home');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (page) => {
    setLoading(true);
    setTimeout(() => {
      setRender(page);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 600);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Add transition classes to body
    document.body.classList.add('transition-colors', 'duration-500', 'ease-in-out');

    if (darkMode) {
      document.body.classList.add('bg-black', 'text-white');
      document.querySelector('.mainul').classList.add('text-black');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-black', 'text-white');
    }
  }, [darkMode]);

  return (
    <div className="transition-colors duration-500 ease-in-out sm:ml-24 sm:mr-24 mt-5 pl-8 pr-8 relative overflow-hidden min-h-screen">
      <button
        onClick={toggleTheme}
        className="absolute top-0 right-5 cursor-pointer px-3 py-1 rounded text pr-6 z-50"
      >
        {darkMode ? (
          <i className="bi bi-brightness-high"></i>
        ) : (
          <i className="bi bi-moon"></i>
        )}
      </button>

      <LoadingBar loading={loading} />
      <Navbar />
      <HoverBar setRender={handleChange} />

      {render === 'Home' && <Home darkMode={darkMode} />}

      {render === 'Skills' && <Skills />}
      {render === 'About' && <About />}
      {render === 'Projects' && <Projects />}
      {render === 'Contact' && <Contact />}
    </div>
  );
};

export default App;
