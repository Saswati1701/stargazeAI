import React from 'react'
import icon from '../assets/technology.png'
import Feature from '../components/Feature'
import { whyLearnAI } from '../constants'


const Card = () => {
  return(
    <div className='learnCard'>
      <h3>Dive Into The AI Revolution</h3>
        <p>
        AI is not just a buzzword—it’s reshaping the world. By learning AI, kids step into a frontier of technology that is driving the future. They gain early insights into how AI powers everything from smart devices to groundbreaking innovations.
        </p>
    </div>
  )
}

let count = [];
for(let i=0; i<7; i++){
  count.push(i+1);
}

const Learn = () => {
  const oddCards = whyLearnAI.filter((item, index)=>(index+1)%2!=0);
  const evenCards = whyLearnAI.filter((item, index)=>(index+1)%2==0);

  return (
    <div className='learn transform'>
      <h1>WHY Learn AI</h1>
      <div className='learnContent'>
        <div>
          {
            oddCards.map((item, index)=>(
              <div key={index} className='learnCard odd'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>
        <div className='countCirclesContainer'>
        {
          count.map((item, index)=>(
            <div key={index} className={`countCircle ${(index+1)%2 == 0 ? 'even' : 'odd'}`}>
              {item}
            </div>
          ))
        }
        </div>
        <div>
          {
            evenCards.map((item, index)=>(
              <div key={index} className='learnCard even'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Learn