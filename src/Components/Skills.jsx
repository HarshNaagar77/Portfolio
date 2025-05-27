import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import reactImg from '../assets/react.png' 
import nodeImg from '../assets/node.png' 
import expressImg from '../assets/express.png' 
import mongoImg from '../assets/mongo.png'
import PythonImg from '../assets/python.png'
import jsImg from '../assets/js.png'
import cppImg from '../assets/cpp.png'
import javaImg from '../assets/java.png'


// Replace with your actual image URLs or import statements
const skillImages = {
  'React Js': reactImg,
  'Mongo Db': mongoImg,
  'Node Js': nodeImg,
  'Express Js': expressImg,
  'Javascript': jsImg,
  'C++': cppImg,
  'Python': PythonImg,
  'Java': javaImg ,
}

const SkillItem = ({ label, setHoveredSkill }) => {
  return (
    <div
      className="border-b text-3xl pb-6 mt-6 relative z-10 hover:scale-105 transition-all"
      onMouseEnter={() => setHoveredSkill(label)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {label}
    </div>
  )
}

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 })
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      const offsetX = 40 // Distance right of cursor
      const offsetY = -100 // Distance below cursor
      mouseX.set(e.clientX + offsetX)
      mouseY.set(e.clientY + offsetY)
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <div className="relative w-full min-h-screen mb-20">
      
      <h1 className="anton text-3xl font-semibold mt-6">Technologies I Use :</h1>
      <div className="skills">
        {Object.keys(skillImages).map((skill) => (
          <SkillItem
            key={skill}
            label={skill}
            setHoveredSkill={setHoveredSkill}
          />
        ))}
      </div>

      {hoveredSkill && (
        <motion.img
          src={skillImages[hoveredSkill]}
          alt={hoveredSkill}
          className="fixed top-0 left-0 w-60 h-60 rounded-2xl object-contain pointer-events-none z-[999]"
          style={{ x: springX, y: springY }}
        />
      )}
    </div>
  )
}

export default Skills
