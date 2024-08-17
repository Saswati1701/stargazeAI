import React from 'react'

const Button = ({background, text}) => {
  return (
    <div className={`button ${background}`}>
        {text}
    </div>
  )
}

export default Button