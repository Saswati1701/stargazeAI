import React from 'react'
import smallSphere from "../assets/4-small.png"
import stars from "../assets/stars.svg"
import logo from "../assets/logoimage.png"
const Pricing = () => {
  return (
    <div id='pricing' className='pricing'>
      <div class="container relative z-2">
        <div class="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img src={smallSphere} alt="Sphere" class="relative z-1" width="255" height="255"></img>
          <div style={{width: "100%", height: "100%", top: "-5rem"}} class="absolute w-[100rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src={stars} alt="Stars" class="w-full" width="950" height="400"></img>
          </div>
        </div>
        <div class="undefined max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center">
          <div class="tagline flex items-center mb-4 md:justify-center">
            <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 0.822266H1V12.8223H5" stroke="url(#brackets-left)"></path>
              <defs>
                <linearGradient id="brackets-left" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#89F9E8"></stop>
                  <stop offset="100%" stop-color="#FACB7B"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div class="mx-3 text-n-3">No hidden fees</div>
            <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08" stroke="url(#brackets-right)"></path>
              <defs>
                <linearGradient id="brackets-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#9099FC"></stop>
                  <stop offset="100%" stop-color="#D87CEE"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 class="h2">Pay ₹1500/mo, get full access</h2>
          <p>Feels unreal right?</p>
          <p style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",}}>
              Making education affordable with <span><img src={logo} alt="logo" height={50}/></span> Stargaze AI</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing