import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import netmvclogo from "../../assets/netmvclogo.png"
import reactjs from "../../assets/reactjs.png"
import dsa from "../../assets/dsa.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {

useGSAP(()=>{
  gsap.from(".circle",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".circle",
      scroll:"body",
      scrub:2,
      start:"top 50%",
      end:"top 20%"

    }
  })
  gsap.from(".line",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".line",
      scroll:"body",
      scrub:2,
      start:"top 50%",
      end:"top 20%"

    }
  })
  gsap.from(".aboutdetails h1",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".aboutdetails h1",
      scroll:"body",
      scrub:2,
      start:"top 50%",
      end:"top 20%"

    }
  })
  gsap.from(".aboutdetails li",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".aboutdetails li",
      scroll:"body",
      scrub:2,
      start:"top 50%",
      end:"top 20%"

    }
  })
  gsap.from(".rightabout",{
    x:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".rightabout",
      scroll:"body",
      scrub:2,
      start:"top 50%",
      end:"top 20%"

    }
  })
  gsap.from(".rightabout .card",{
    x:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".rightabout .card",
      scroll:"body",
      scrub:2,
      start:"top 50%",
      end:"top 20%"

    }
  })
})



  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>Name</span> : MUHAMMAD WAQAS HAMID
              </li>
               <li>
                <span>Age</span> : 21 YEARS
              </li>
               <li>
                <span>Gender</span> : MALE
              </li>
               <li>
                <span>Languages Known</span> : ENGLISH,URDU
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>Degree</span> : BS SOFTWARE ENGINEERING
              </li>
               <li>
                <span>Branch</span> : BASIC AND APPLIED SCIENCES
              </li>
               <li>
                <span>Cgpa</span> : 3.1
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                ASP.NET WEB DEVELOPER
              </li>
               <li>
                REACT.js DEVELOPER
              </li>
               <li>
                DSA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="ASP.NET DEVELOPER" image={netmvclogo} />
        <Card title="REACT.js DEVELOPER" image={reactjs} />
        <Card title="DSA " image={dsa} />
      </div>
    </div>
  )
}

export default About