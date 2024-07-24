import React from 'react'
import {BrowserRouter ,Routes, Route,   Navigate} from 'react-router-dom'
import Navbar from './Component/Navbar'
import All from './Component/All'
import Fsd from './Component/Fsd'
import DataScience from './Component/DataScience'
import CyberSecurity from './Component/CyberSecurity'
import Career from './Component/Career'
import cr1 from './images/cr1.jpg'
import cr2 from './images/cr2.jpg'
import cr3 from './images/cr3.jpg'
import cr4 from './images/cr4.jpg'
import cr5 from './images/cr5.jpg'
import cr6 from './images/cr6.jpg'
import cr7 from './images/cr7.jpg'
import cr8 from './images/cr8.jpg'
import cr9 from './images/cr9.jpg'
import fsd1 from './images/fsd1.jpg'
import fsd2 from './images/fsd2.jpg'
import fsd3 from './images/fsd3.jpg'
import fsd4 from './images/fsd4.jpg'
import fsd5 from './images/fsd5.jpg'
import cs1 from './images/cs1.jpg'
import cs2 from './images/cs2.jpg'
import cs3 from './images/cs3.jpg'
import cs4 from './images/cs4.jpg'
import cs5 from './images/cs5.jpg'
import ds1 from './images/ds1.jpg'
import ds2 from './images/ds2.jpg'
import ds3 from './images/ds3.jpg'
import ds4 from './images/ds4.jpg'
import ds5 from './images/ds5.jpg'

function App() {
  let info = [
    {
      image: cr5,
      field: "Career Paths",
      content: "Mechanical engineering is a field where people make things and solve problems using machines. It’s cool because you can take ideas and turn them into real things."
    },
    {
      image: fsd1,
      field: "Full Stack Development",
      content: "In this blog, youll be reading about some of the best Full-Stack Development Project Ideas in 2024 which you must"
    },
    {
      image: cr9,
      field: "Career Paths",
      content: "With problems of global warming and pollution being a major concern, the Chemical engineering scope has never been higher."
    },
    {
      image: ds1,
      field: "Data Science",
      content: "The emerging field of Data Science is wildly calling and is not easy to give up on, just like that! If you are a non-coder, a beginner,"
    },
    {
      image: cr1,
      field: "Career Paths",
      content: "Practical projects are an important part of your educational journey. They not only reinforce theoretical knowledge but also provide a platform to innovate and solve real-world problems."
    },
    {
      image: fsd2,
      field: "Full Stack Development",
      content: "In the ever-evolving world of technology, the demand for full stack developers is at an all-time high. As businesses continue to embrace online platforms and advanced technologies,"
    },
    {
      image: fsd3,
      field: "Full Stack Development",
      content: "This blog is all about the Full Stack Developer Roadmap for 2024 that covers everything you need to know to become a successful full stack developer."
    },
    {
      image: fsd4,
      field: "Full Stack Development",
      content: "In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full stack development,"
    },
    {
      image: fsd5,
      field: "Full Stack Development",
      content: "Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks."
    },
    {
      image: cr2,
      field: "Career Paths",
      content: "An Electronics and Communications engineer can work in aviation and avionics, consumer electronics, electricity plants, manufacturing, transportation, communication & telecommunication, computer application, radio & television, diagnostic equipment manufacturing, and offshore companies."
    },
    {
      image: cr3,
      field: "Career Paths",
      content: "Have you ever wondered why your school projects are more than just assignments? Well, that’s what we’re here to talk about."
    },
    {
      image: cr4,
      field: "Career Paths",
      content: "If you are a computer science student or a budding developer, what is the easiest way to acquire coding skills or improve your proficiency in coding languages?"
    },
    {
      image: cr1,
      field: "Career Paths",
      content: "Electrical engineering is a branch of engineering that primarily concerns the study, design, development, and application of technologies related to electricity, "
    },
    {
      image: cs1,
      field: "Cyber Security",
      content: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!"
    },
    {
      image: cs2,
      field: "Cyber Security",
      content: "Hey, building a real-world project is the best hands-on learning that you can do! From picking up the topic of your project then to building the core idea,"
    },
    {
      image: cr6,
      field: "Career Paths",
      content: "If you’re a civil engineer in India, you already know you’re part of a profession that shapes the very infrastructure of our society. And if you’re a smart one (which, of course, you are), you’re likely considering where the grass is greenest for your career trajectory. "
    },
    {
      image: cs3,
      field: "Cyber Security",
      content: "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success."
    },
    {
      image: cr7,
      field: "Career Paths",
      content: "Aeronautical engineers design and test products for aircrafts, spacecrafts, satellites, and missiles."
    },
    {
      image: cs4,
      field: "Cyber Security",
      content: "There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism."
    },
    {
      image: cs5,
      field: "Cyber Security",
      content: "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe."
    },
    {
      image: ds2,
      field: "Data Science",
      content: "This article will give you a clear idea of what Data Science is, its key components, the process behind it, and finally the future of it. So,"
    },
    {
      image: ds3,
      field: "Data Science",
      content: "From predicting market trends to optimizing business operations, data science provides the tools and techniques needed to turn raw data into actionable insights."
    },
    {
      image: cr8,
      field: "Career Paths",
      content: "Marine engineering applies a number of engineering sciences, including mechanical engineering, electrical engineering, electronic engineering, and computer science, to the development, design, operation and maintenance of watercraft propulsion and ocean systems"
    },
    {
      image: ds4,
      field: "Data Science",
      content: "Data science is revolutionizing the way we understand and interpret data, providing critical insights that drive decision-making across industries."
    },
    {
      image: ds5,
      field: "Data Science",
      content: "From optimizing our Amazon search history to providing us with the best possible Netflix movie recommendations, Data Science applications are all around you."
    }
   
  ];
  
  return <>
     
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/all' element={ <All info={info}/>}/>
            <Route path='/full-stack-development' element={ <Fsd info={info}/>} />
            <Route path='/data-science' element={ <DataScience info={info}/>}/>
            <Route path='/cyber-security' element={ <CyberSecurity info={info}/>}/>
            <Route path='/career' element={ <Career info={info}/>}/>
            <Route path='*' element={ <Navigate to='/all'/>}/>
          </Routes>
        </BrowserRouter>
    
  </>
}

export default App
