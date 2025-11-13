import React from 'react'
import "./Contact.css"
import contact from "../../assets/contact.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Contact() {

useGSAP(()=>{
gsap.from(".leftcontact img",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".leftcontact img",
      scroll:"body",
      scrub:2,
      start:"top 80%",
      end:"top 20%"

    }
  })
  gsap.from("form",{
    x:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"form",
      scroll:"body",
      scrub:2,
      start:"top 80%",
      end:"top 20%"

    }
  })

  })

 return (
    <div id="contact">
        <div className="leftcontact">
            <img src={contact} alt="" />
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/xblzerpn" method='post'>
                <input type='text' name='UserName' placeholder='Enter Your Name' />
                <input type='email' name='Email' placeholder='Email' />
                <textarea id='textarea' name='message' placeholder='message'/>
                <input type='submit' id='btn' value='Submit'/>
            </form>
        </div>
    </div>
  )
}

export default Contact