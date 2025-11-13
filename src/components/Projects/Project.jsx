import React from 'react'
import "./Project.css"
import Card from '../Card/Card'
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import cb from "../../assets/cb.png"
import tti from "../../assets/tti.png"
import br from "../../assets/br.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Project() {
useGSAP(()=>{
gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
      start:"top 80%",
      end:"top 20%"

    }
  })
  gsap.from(".slider .card",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider .card",
      scroll:"body",
      scrub:2,
      start:"top 80%",
      end:"top 20%"

    }
  })

  })

  return (
     <div id="projects">
        <h1 id='para'>1+ Year Experienced in Projects</h1>
        <div className="slider">
            <Card title="AI TEXT TO IMAGE" image={tti} />
            <Card title="VIRTUAL ASSISTANT" image={va} />
            <Card title="AI POWERED FITNESS WEBSITE" image={fw} />
            <Card title="AI CHATBOT" image={cb} />
            <Card title="AI BACKGROUND REMOVER" image={br} />
        </div>
    </div>
  )
}

export default Project