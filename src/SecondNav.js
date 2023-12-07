import React from 'react'
import './assests/landingPage.css';
function SecondNav({ isOpen }) {
  return (
   <>
       <div className={`navbar ${isOpen ? 'open' : ''} absolute  w-[100%] bg-[#8a2aaa] overflow-hidden py-[20px] flex items-center justify-center transition-[2.4s] md:flex-none md:relative md:py-0 lg:py-[20px]`}>
       <ul className='flex h-[80%] flex-col items-center justify-center gap-10 nav-items md:flex-row md:h-[100%] md:w-[70%] md:mx-auto md:justify-around lg:justify-between'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Magazine</a></li>
            <li><a href="#">Textbooks</a></li>
            <li><a href="#">Audiobooks</a></li>
            <li><a href="#">Recomended</a></li>
            <li><a href="#">Sale</a></li>
        </ul>
       </div>
   {/* MOBILE VIEW OF NAV */}
   {/* <div className=' md:hidden'>

   </div> */}
   </>
  )
}

export default SecondNav