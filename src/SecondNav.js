import React from 'react'
import './assests/landingPage.css';
function SecondNav() {
  return (
   <>
   <div className='h-[7vh] w-[100%] bg-[#8a2aaa] flex items-center' >
    <div className='w-[60%] h-[100%] mx-auto'>
        <ul className='flex h-[100%] items-center justify-between nav-items'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Magazine</a></li>
            <li><a href="#">Textbooks</a></li>
            <li><a href="#">Audiobooks</a></li>
            <li><a href="#">Recomended</a></li>
            <li><a href="#">Sale</a></li>
        </ul>
    </div>
   </div>
   </>
  )
}

export default SecondNav