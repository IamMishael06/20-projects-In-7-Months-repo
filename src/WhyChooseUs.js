import React from 'react'
import { FaClock, FaCreditCard, FaMedal, FaShieldAlt } from 'react-icons/fa';

function WhyChooseUs() {
    const WhyChooseUs = [
        {
            image : <FaClock className='icon'/>,
            headText : 'Quick Delivery',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cumque iste repellendus neque repudiandae consequuntur optio similique sit?'
        },
        {
            image: <FaCreditCard className='icon'/>,
            headText : 'Secure Payment',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cumque iste repellendus neque repudiandte sit?'
        },
        {
            image : <FaMedal className='icon'/>,
            headText : 'Best Quality',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cumque iste repellendus neque repudiandae consequuntur optio similique quibusdam voluptate sit?'
        },
        {
            image : <FaShieldAlt className='icon'/>,
            headText : 'Return Guarantee',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cumque iste repellendus neque repudiandae?'
        },
    ]
    const displayText = WhyChooseUs.map(pick => <div className='w-[80%] md:w-[20%] md:h-[90%] lg:w-[20%] lg:h-[60%] flex flex-col md: lg:justify-evenly pt-5 md:pt-0 items-center md:items-start text-areaWCU'>{pick.image}<h1 className='text-center text-[12px] md:text-left md:text-[15px] lg:text-[20px]'>{pick.headText}</h1><p className='text-center md:text-left'>{pick.para}</p></div>)
  return (
    <>
    <div className='w-[100%] md:h-[30vh] h-auto relative z-[99px] py-5 bg-[#fdf8fe] flex justify-center md:py-0'>
        <div className='w-[90%] border-2mt-5 md:mt-0 mx-auto flex flex-col md:flex-row justify-between items-center'>
                 {displayText}
        </div>
    </div>
    </>
  )
}

export default WhyChooseUs