import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const hoverMap = {
      home: "Home",
      skills: "Skills",
      aboutHover: "About",
      Projects: "Projects",
      Contact: "Contact",
    };

    const listeners = [];

    Object.entries(hoverMap).forEach(([className, label]) => {
      const elements = document.querySelectorAll(`.${className}`);
      const enter = () => setHoverText(label);
      const leave = () => setHoverText("");

      elements.forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        listeners.push({ el, enter, leave });
      });
    });

    // Cleanup
    return () => {
      listeners.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  const isHovered = hoverText !== "";

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 pointer-events-none z-[99999]"
      animate={{
        x: position.x - 15,
        y: position.y - 15,
        scale: isHovered ? 2 : 0.5,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          isHovered
            ? "bg-black text-white  border-black"
            : "bg-transparent border-black"
        }`}
      >
        {isHovered && <span className="text-[6px]">{hoverText}</span>}
      </div>
    </motion.div>
  );
};

export default CustomCursor;
