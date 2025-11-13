import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import {TypeAnimation} from 'react-type-animation'
function Home() {

useGSAP(()=>{
  let tl1= gsap.timeline()
  tl1.from(".line1",{
    y:100,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:90,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:300,
    duration:1,
    opacity:0
  })
  
})


  return (
    <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">WAQAS HAMID</div>
          <div className="line3">
             <TypeAnimation
              sequence={[
                "SOFTWARE DEVELOPER", 1000,
                "ASP.NET DEVELOPER", 1000,
                "REACT.JS DEVELOPER", 1000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />

          </div>
          <button>HIRE ME</button>
        </div>

      </div>
      <div className="righthome">
        <img src={man} alt="" />

      </div>
    </div>
  )
}

export default Home