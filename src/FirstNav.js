import React from 'react';
import './assests/landingPage.css';
import { useEffect, useState } from 'react'
import logo from './assests/logo.png';
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
  const shareMessage = (e) =>{
      e.preventDefault()
        alert(`welcome ${form.bookName}`)
    }
    return (
      <>
        <nav className='bg-[#fff] w-[screen] h-[10vh]'>
          <div className='w-[90%] h-[100%] mx-auto flex justify-between items-center'>
            <div className='logo-sec w-[20%] flex items-center'>
              <img src={logo} alt="" className='w-[40px]'/>
              <h1 className='text-[#000] text-[25px]'>MarsBook</h1>
            </div>
            <div className='menu w-[50%] h-[100%] flex justify-between items-center'>
                <button className='btn bg-[#8c25b6] h-[60%] w-[15%] p-[10px] rounded-[5px] text-[#fff] flex justify-center items-center '>Menu
                <FaCaretDown className='icons caretUp' />
                </button>
                <form onSubmit={shareMessage} action="" className='w-[80%] h-[60%] flex justify-between items-center bg-[#f3f3f3] rounded-[5px] '>
                <input value={form.bookName} onChange={handleForm} type="search" className='search-bar w-[80%] bg-[#f3f3f3] pl-3' placeholder='Find books here...' />            
                </form>
            </div>
            <div className='w-[20%] h-[100%] flex items-center justify-between third-part'>
              <div className='w-[20%] basket h-[60%] bg-[#8c25b6] flex justify-center items-center rounded-[10px] cursor-pointer' >
              <FaShoppingBasket className='basket-item text-[#fff]' />
              </div>
              <button className='w-[68%] flex justify-between items-center rounded-[5px] cursor-pointer px-[10px]'>
                <FaUser/>
                <p>Roberto Karlos</p>
                <FaCaretDown/>
              </button>
            </div>
          </div>
        </nav>
      </>
    )
    }

export default FirstNav
