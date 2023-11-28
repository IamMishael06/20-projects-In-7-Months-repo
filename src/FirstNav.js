import React from 'react';
import './assests/landingPage.css';
import { useEffect, useState } from 'react'
import logo from './assests/logo.png';
import SecondNav from './SecondNav';
import {FaCaretDown, FaShoppingBasket, FaUser} from 'react-icons/fa';
function FirstNav() {
  const [form, setForm] = useState(
    {
      bookName : ''
    }
  )
  const handleForm = (event) =>{
    setForm({
      bookName : event.target.value
    }
    )
    // console.log(form.username) 
  }
  const [isOpen, setIsOpen] = useState(false);
  
  const toggler = () =>{
    setIsOpen(!isOpen)
  }
    return (
      <>
      
        <nav className='bg-[#fff] w-[screen] h-[10vh]'>
          <div className='w-[90%] h-[100%] justify-between items-center mx-auto flex border-3 border-green-500 md:justify-between md:items-center'>
            <div className='logo-sec w-[25%] flex items-center md:w-[20%]'>
              <img src={logo} alt="" className='w-[20px] md:w-[40px]'/>
              <h1 className='text-[#000] text-[10px] md:text-[20px] lg:text-[25px]'>MarsBook</h1>
            </div>
            <div className='menu w-[50%] gap-2 h-[100%] flex justify-between items-center md:gap-0'>
                <button className='btn bg-[#8c25b6] h-[25px] w-[25px] rounded-[50%]  p-[10px]  text-[#fff] flex justify-center items-center md:h-[60%] md:rounded-[5px] md:w-[15%]'><p className='hidden md:block md:text-[10px] lg:text-[15px]'>Menu</p>
                <FaCaretDown className='icons caretUp text-[10px] ' onClick={toggler} />
                </button>
                <form action="" className='w-[80%] h-[60%] flex justify-between items-center bg-[#f3f3f3] rounded-[5px] '>
                <input value={form.bookName} onChange={handleForm} type="search" className='search-bar w-[80%] bg-[#f3f3f3] pl-3 text-[10px] md:text-[14px] placeholder:text-[8px] md:placeholder:text-[14px]' placeholder='Find books here...' />            
                </form>
            </div> 
            <div className='w-[22%] h-[100%] gap-2 flex items-center justify-between third-part md:gap-0'>
              <div className='basket w-[20px] h-[20px] bg-[#8c25b6] rounded-[50%] flex justify-center items-center  cursor-pointer md:w-[20%] md:h-[60%] md:rounded-[10px]' >
              <FaShoppingBasket className='basket-item text-[#fff] text-[10px] md:text-[14px]' />
              </div>
              <button className='w-[68%] flex justify-center items-center rounded-[5px] cursor-pointer px-[10px] md:justify-between md:w-[70%]'>
                <FaUser/>
                <p className='hidden md:block md:text-[8px] lg:text-[15px]'>Roberto Karlos</p>
                <FaCaretDown className='hidden md:block'r/>
              </button>
            </div>
          </div>
        </nav>
        <SecondNav isOpen={isOpen}/>
      </>
    )
    }

export default FirstNav
