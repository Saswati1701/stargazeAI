import React from 'react'
import homeVideo from '../assets/home.mp4'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <>
    <video src={homeVideo} className='homeVideo' muted autoPlay loop></video>
    <Link to="/home">
    <div className='big-text'>
        <h1
            style={{
                fontSize: "270px",
                margin: "0px",
                WebkitTextStrokeWidth: "10px"
            

            }}
        >AI <span
            style={{
                fontSize: "83px",
                margin: "0px",
                WebkitTextStrokeWidth: "5px"
            }}
        >WILL TAKE OVER</span></h1>
        <h1
            style={{
                fontSize: "176px",
                margin: "0px",
                WebkitTextStrokeWidth: "7px"
            }}
        >THE WORLD</h1>
    </div>
    </Link>
    </>
  )
}

export default LandingPage