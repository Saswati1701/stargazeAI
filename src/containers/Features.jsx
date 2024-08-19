import React from 'react'
import { featuresList } from '../constants'
import Feature from '../components/Feature'

const Features = () => {
  return (
    <div className='features' id='features'>
      <div className='featuresContent'>
        <div className='features-centre-icon-container'>
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