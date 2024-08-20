import React, { useState } from 'react'
import faqImage from "../assets/faq 1.png"
import { faq } from '../constants';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className='question' onClick={toggleAnswer}>
        <div >
          {question}
        </div>
        <div className='icon'>{isOpen ? '-' : '+'}</div>
          
      </div>
      <div className={`answer ${isOpen ? 'open' : 'closed'}`}>
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div id='faq' className='faqContainer'>
      <img className='faqImage' src={faqImage} alt="" height={524} width={629}/>
      <div className="faq">
        <h1
          style={{
            borderBottom: "5px solid orange",
            width:" fit-content",
          }}
        >FAQ</h1>
        {
          faq.map((item, index)=>(
            <FAQItem key={index} question={item.question} answer={item.text}/>
          ))
        }
    </div>
    </div>
  )
}

export default FAQ