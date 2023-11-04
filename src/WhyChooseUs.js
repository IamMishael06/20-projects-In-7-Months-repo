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
    const displayText = WhyChooseUs.map(pick => <div className='w-[20%] flex flex-col justify-evenly text-areaWCU'>{pick.image}<h1>{pick.headText}</h1><p>{pick.para}</p></div>)
  return (
    <>
    <div className='w-[100%] h-[30vh] relative z-[99px] bg-[#fdf8fe] flex justify-center '>
        <div className='w-[90%] mx-auto flex justify-between items-center'>
                 {displayText}
        </div>
    </div>
    </>
  )
}

export default WhyChooseUs