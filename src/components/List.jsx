import React from 'react'
import check from '../assets/check.png'

const List = ({text}) => {
  return (
    <div className='list'>
        <img src={check} alt="check" height={26}/>
        <p>{text}</p>
    </div>
  )
}

export default List