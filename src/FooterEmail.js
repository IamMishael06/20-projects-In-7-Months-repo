import React from 'react'

function FooterEmail() {
  return (
    <div className='w-[100%] md:w-[30%]'>
        <h1 className='font-bold text-[16px] font-poppins'>Don't miss the newest books</h1>
        <p className='text-[14px] font-poppins mt-3 text-[#b5b5b5]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam error inventore et, accusantium veritatis quas.</p>
        <form action="#" className='flex gap-[5px] mt-10'>
            <input type="email" className='w-[70%] md:w-[50%] outline-none h-[50px] bg-[#c5c1c1dd] rounded-md pl-5 text-[12px] text-[#838181]' placeholder='Enter your email here' />
            <button className='bg-[#8c25b6] p-2 rounded-md text-[12px] text-[#fff]'>Subscribe</button>
        </form>
    </div>
  )
}

export default FooterEmail