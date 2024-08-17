import React from 'react'
import homeImage from "../assets/AI and Cryptocurrency_ Enhancing Each Other for Mutual Progress.jpeg"
import List from '../components/List'
import Button from '../components/Button'
const Home = () => {
  return (
    <div className='homeContainer transform'>
      <div className='homeContent'>
        <div className='homeContentText'>
          <h1>Introducing a Premium <br /> <span>Artificial Intelligence</span> Specialization <br />for young kids</h1>
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
        <div>
          <img src={homeImage} alt="home image" width={500} style={{borderRadius: "50px"}}/>
        </div>
        
      </div>
    </div>
  )
}

export default Home