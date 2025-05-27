import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (

    <div className=' flex gap-10 mt-5 flex-wrap'>
          <div className=' sm:w-[63%]'>
      <div className='anton text-3xl border-b pb-3 mt-12  '>
      Contact
      </div>

      <h1 className=' font-semibold text-2xl mt-6'>
        Let’s build something amazing together!
      </h1>
      <p className='mt-3 text-justify '>
        I'm always open to collaborating on meaningful projects, freelance gigs, or exciting tech ideas.
        Whether you're a startup looking for a full-stack developer or someone with a creative concept — let’s connect.
        I enjoy turning ideas into user-friendly digital experiences that deliver real value.
        Feel free to reach out via email or connect with me on GitHub or LinkedIn — I'm just a message away.
      </p>

      <h1 className='text-2xl font-semibold mt-3'>📬 You can reach me via:</h1>

      <ul className="pl-4 space-y-2 mt-2 text-justify">
      

        <li className="relative pl-6 before:content-['>'] before:absolute before:left-0  before:font-bold">
          <i class="bi bi-linkedin"></i> : <a className=' text-blue-800 underline' href="https://www.linkedin.com/in/harsh-naagar-a4b5b8207/">Harsh Naagar</a>
        </li>
        <li className="relative pl-6 before:content-['>'] before:absolute before:left-0 before:font-bold text-justify">
          <i class="bi bi-github"></i> : <a href="https://github.com/HarshNaagar77" className=' text-blue-800 underline'>HarshNaagar77</a>
        </li>
         <li className="relative pl-6 before:content-['>'] before:absolute before:left-0 before:font-bold">
          <i className="bi bi-envelope-fill mr-1"></i> : 
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hnaagar12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline hover:text-blue-900"
          >
             hnaagar12@gmail.com
          </a>
       </li>
      </ul>
      <p className=' pt-3'>I’m a problem-solver at heart who loves tackling real-world challenges through code. With a strong focus on clean, scalable architecture, I’m dedicated to transforming your ideas into production-ready products. I believe that great software is built through clear communication and collaborative energy, so let’s connect and create something amazing together!</p>
    </div>
      <div className='mt-6 sm:w-1/3 mb-24'>
        <ContactForm />
      </div>
    </div>

    
  )
}

export default Contact
