import React from 'react'
import ImgOne from './assests/logo.png';
import FooterEmail from './FooterEmail';
import {FaFacebookF, FaYoutube, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa';

function MainFooter() {
  return (
    <>
    <div className='w-[100%] h-auto flex flex-col gap-12 md:flex-row md:gap-[5%]  px-[5%] py-12'>
      <div className='sec-1 md:w-[30%] w-[100%]'>
        <div className='footer-logo-sec'>
          <span className='flex items-center'><img src={ImgOne} alt="" className='w-[25px]'/><h1 className='text-[25px]'>MarsBook</h1></span>
          <p className='text-[12px] text-[#b5b5b5] font-normal font-[poppins] mt-5 '>MarsBook is an online bookstore that sells genres of books from around the world. Find your book here now</p>
        </div>
        <div className='socials mt-10'>
          <p className='font-bold font-poppins'>Follows Us</p>
          <div className='flex gap-3 flex-wrap social icon mt-5'>
            <div className='w-[40px] h-[40px] border-2 border-[#81309e49] rounded-full flex justify-center items-center'>
              <FaFacebookF className='w-[15px] h-[15px]'/>
            </div>
            <div className='w-[40px] h-[40px] border-2 border-[#81309e49] rounded-full flex justify-center items-center'>
              <FaYoutube className='w-[15px] h-[15px]'/>
            </div>
            <div className='w-[40px] h-[40px] border-2 border-[#81309e49] rounded-full flex justify-center items-center'>
              <FaTwitter className='w-[15px] h-[15px]'/>
            </div>
            <div className='w-[40px] h-[40px] border-2 border-[#81309e49] rounded-full flex justify-center items-center'>
              <FaLinkedin className='w-[15px] h-[15px]'/>
            </div>
          </div>
        </div>
      </div>

      {/* Sec 2 */}
      <div className='sec-2  w-[100%] md:w-[10%] '>
        <h2 className='font-bold text-[16px] font-poppins'>Quick Links</h2>
        <div className='flex flex-col gap-3 mt-5'>
        <p>About us</p>
        <p>Contact Us</p>
        <p>Products</p>
        <p>Login</p>
        <p>Signup</p>
        </div>
       
      </div>

      {/* Sec 3 */}
      <div className='sec-2 w-[100%] md:w-[10%] '>
        <h2 className='font-bold text-[16px] font-poppins'>Customer Area</h2>
        <div className='flex flex-col gap-3 mt-5'>
        <p>My Account</p>
        <p>Orders</p>
        <p>Tracking List</p>
        <p>Terms</p>
        <p>Privacy Policy</p>
        <p>FAQ</p>
        </div>
      </div>

      <FooterEmail />
      

    </div>
    </>
  )
}

export default MainFooter