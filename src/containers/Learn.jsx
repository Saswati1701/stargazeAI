import React from 'react'
import Feature from '../components/Feature'
import { whyLearnAI } from '../constants'
import gradient from '../assets/gradient.png'


const Learn = () => {
  
  let count = [];
  for(let i=0; i<7; i++){
    count.push(i+1);
  }
  return (
    <div className='learn transform'>
      <h1 style={{margin: "1rem 0 5rem 0", color: "black"}}>Why Learn Artificial Intelligence?</h1>
      <div className='learnContent'>
        <div className="learnCardsContainer">
          {
            whyLearnAI.map((item, index)=>(
              <div key={index} className={`learnCard ${(index+1)%2 == 0 ? 'evenCard' : 'oddCard'}`}>
                <img src={item.img} alt='icon' height={200}/>
                <div>
                  <h3>{item.title}</h3>
                  <p style={{fontSize: "14px"}}>{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div>
        <div className='countCirclesContainer'>
        {
          count.map((item, index)=>(
            <div key={index} className={`countCircle ${(index+1)%2 == 0 ? 'evenCircle' : 'oddCircle'}`}>
              <div className={`circleWrapper ${(index+1)%2 == 0 ? 'evenStroke' : 'oddStroke'}`}></div>
              {item}
            </div>
          ))
        }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Learn