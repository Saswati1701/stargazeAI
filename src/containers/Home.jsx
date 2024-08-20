import React from 'react'
import homeImage from "../assets/homeRobot.png"
import List from '../components/List'
import Button from '../components/Button'
import homeGradient from '../assets/homeGradient.png'
import google from "../assets/google.png"
import amazon from "../assets/amazon.png"
import ycombinator from "../assets/ycombinator.png"
import rebright from "../assets/rebright.png"
import stem from "../assets/stem-bg-white.png"
import FAQ from './FAQ'
import Roadmap from './Roadmap'
import Instructors from './Instructors'

const Home = () => {
  const companies = [google, amazon, ycombinator, rebright, stem]
  return (
    <>
    <div className='homeContainer' id='home'>
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
      <div className='homeContentContainer'>
        <div className='textContent'>
          <h1>Teach Your Kids to Dominate AI</h1>
          <h3>Introducing a Premium Artificial Intelligence Specialization <br /> For Young Kids</h3>
          <div className='homeListContainer'>
              <List text="Based on Stanford University's Machine Learning Specialization Curriculum"/>
              <List text="LIVE Classes with Personalized attention"/>
              <List text="Pay Just Rs. 1500/mo And Get Full Access To Our Advanced Learning Program"/>
            </div>
            <div className='homeButtons'>
              <Button text="Enroll now"></Button>
              <Button background="solid" text="Try a Free Class"/>
            </div>
          </div>
      </div>

      <div className='homeImageContainer'>
        <img className='homeGradient' src={homeGradient} alt="" />
        <img className="homeImage" src={homeImage} alt=""/>
      </div>
      
    </div>
    <Instructors/>
    </>
  )
}

export default Home