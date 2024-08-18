import React from 'react'
import homeImage from "../assets/homeRobot.png"
import List from '../components/List'
import Button from '../components/Button'
import gradient from '../assets/gradient.png'
const Home = () => {
  return (
    <div className='homeContainer transform'>
      {/* <div className='homeContent'>
        <img className="homeGradient" src={gradient} alt="gradient" />
        <div className='homeImageContainer'>
          <img className='homeImage' src={homeImage} alt="home image" style={{borderRadius: "50px"}}/>
        </div>
        <div className='homeContentText'>
          <h1>We Will Teach Your Kids to Dominate <br /><span>Artificial Intelligence</span></h1>
          <p>Introducing a Premium <br /> <span>AI</span> Specialization <br />for young kids</p>
          <div>
            <List text="Based on Stanford University's Machine Learning Specialization Curriculum"/>
            <List text="LIVE Classes with Personalized attention"/>
            <List text="Pay Just Rs. 1500/mo And Get Full Access To Our Advanced Learning Program"/>
          </div>
          <div className='homeButtons'>
            <Button background="gradient" text="Enroll Now"/>
            <Button background="solid" text="Try a Free Class"/>
          </div>
        </div>
        
      </div> */}
    </div>
  )
}

export default Home