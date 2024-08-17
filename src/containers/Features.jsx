import React from 'react'
import { featuresList } from '../constants'
import Feature from '../components/Feature'
import icons from '../assets/technology.png'

const Features = () => {
  return (
    <div className='features transform'>
      <div className='featuresContent'>
        <div className='features-centre-icon-container'>
          <img src={icons} alt="" height={40}/>
        </div>
        {
          featuresList.map((item, index)=>(
            <Feature 
              key={index} 
              image={item.image} 
              title={item.title} 
              text={item.text}
              index={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Features