import React from 'react'


function Ournewletter() {
  return (
    <>
    <div className='newsletter w-[100%] py-10  h-auto md:h-[30vh] bg-[#8d27ae]'>
        <div className='h-[100%] w-[80%] mx-auto flex flex-col justify-evenly md:flex-row md:justify-between  items-center'>
        <h1 className='text-[#fef0fe] md:text-[24px] text-center md:text-left text-[16px] w-[90%] md:w-[30%]'>Subscribe our newsletter for newest books updates</h1>
        <form action="" className='flex items-center gap-2 mt-5 w-[90%] md:w-[70%] md:justify-end mx-auto'>
            <input type="text" placeholder='type your emai here' className='h-[40px] w-[70%] md:w-[300px] rounded-[6px] pl-3 placeholder:text-[#ffffff88] text-[10px] md:text-[12px] placeholder:text-[12px] backdrop-filter-[40px] outline-none '/>
            <input type="submit" value="SUBSCRIBE"  className=' md:w-[20%] h-[40px] w-[25%] text-[10px] text-[#8d27ae] rounded-[6px] bg-white font-[600]'/>
        </form>
        </div>
    </div>
    </>
  )
}

export default Ournewletter 