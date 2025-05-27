import React from 'react'
import img from '../assets/aboutBanner.jpg'
import Timeline from './Timeline'
import Exp from './Exp'

const About = () => {
  return (
    <div>
      <div>
         <img
                className="h-60 w-full object-cover mt-6 rounded-2xl"
                src={img}
                alt=""
              />

        <h1 className=' text-2xl font-semibold border-b mt-6 pb-6'>About me</h1>
        <p className=' text-lg mt-4'>
            Hi! I'm <span className=' font-semibold'>Harsh Naagar</span>, a passionate and dedicated Full-Stack Web Developer with a knack for building intuitive and scalable web applications. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I enjoy transforming ideas into real-world products that solve problems and enhance user experience. <br />
        </p>

        <p className=' text-lg mt-4'>
             Over the past few years, I've worked on a variety of projects—from dynamic e-commerce platforms to collaborative social apps. I love clean code, efficient architecture, and the thrill of bringing creative concepts to life through code.</p> 

        <p className=' text-lg mt-4'>
                        When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or simply sketching out my next big idea.
        </p>
              

        <h1 className=' text-2xl font-semibold border-b mt-6 pb-6'>Education</h1>
        <Timeline></Timeline>

        <h1 className=' text-2xl font-semibold border-b mt-6 pb-6'>Work Experience</h1>
        <Exp></Exp>
      </div>
    </div>
  )
}

export default About
