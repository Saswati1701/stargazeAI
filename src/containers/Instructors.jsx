import React from 'react'
import iitbhu from "../assets/IIT-Logo.jpg"
import microsoft from "../assets/micrologo.png"
import stanford from "../assets/Stanford-University-Logo.png"
import deep from "../assets/deeplearning-ai-logo.png"

const Card = ({text, img1, img2, height1="50px", height2="50px", marginRight="0px"}) => {
  return(
    <div className='instructorsContentContainer'>
      <h3>{text}</h3>
      <div className='instructorsLogoContainer'>
        <img src={img1} alt="img1" height={height1} style={{marginRight: marginRight}}/>
        <img src={img2} alt="img2" height={height2}/>
      </div>
    </div>
  )
}

const Instructors = () => {
  return (
    <div id='instructors'>
      <h1>Bringing Together Industry Expertise And Academic Excellence</h1>
      <div className='instructorsContainer'>
        <Card text="Built by alumnis from" img1={iitbhu} img2={microsoft} marginRight='2rem'/>
        <Card text="Our Curriculum is inspired from" img1={stanford} img2={deep} height1="120px"/>
      </div>
    </div>
  )
}

export default Instructors