import React from 'react'
import pfp1 from './assests/pfp2.webp'
import pfp2 from './assests/pfp3.jpeg'
import pfp3 from './assests/pfp4.jpeg'
import pfp4 from './assests/pfp1.webp'

function Testimonials() {
  return (
    <>
    <div className='mt-5 h-auto md:h-[60vh] bg-[#fdf8fe] flex-col gap-5 md:flex-row items-center justify-between px-[50px] '>
        <div className='testimonial-text md:w-[40%] h-auto md:h-[80%] w-[100%]  pt-[100px]'>
            <h1 className=' text-[18px] md:text-[25px]'>Testimonial</h1>
            <p className='text-[12px] text-[#9d989e] md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magnam ipsam fugiat repudiandae distinctio mollitia pariatur vitae accusantium, voluptas cum aliquid id voluptatum iusto.</p>
            <div className='flex mt-5'>
                <img src={pfp1} alt="" className='w-[30px] h-[30px] object-cover rounded-full border-2 border-white-500' />
                <img src={pfp2} alt="" className='w-[30px] h-[30px] object-cover rounded-full ml-[-4px] border-2 border-[#fff]-500' />
                <img src={pfp3} alt="" className='w-[30px] h-[30px] object-cover rounded-full ml-[-4px] border-2 border-[#fff]-500'/>
                <img src={pfp4} alt="" className='w-[30px] h-[30px] object-cover rounded-full ml-[-4px] border-2 border-[#fff]-500' />
                <div className='w-[30px] h-[30px] bg-[#8d27ae] rounded-full ml-[-4px] flex justify-center items-center'>
                    <p className='text-[8px] text-[#fff]'>2k+</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonials