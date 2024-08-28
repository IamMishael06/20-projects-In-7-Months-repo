import React from 'react'
import pfp1 from './assests/pfp2.webp'
import pfp2 from './assests/pfp3.jpeg'
import pfp3 from './assests/pfp4.jpeg'
import pfp4 from './assests/pfp1.webp'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
function Testimonials() {
  return (
    <>
      <div className='testimonial-sec mt-5 pb-10 h-auto md:h-[60vh] bg-[#fdf8fe] z-10 flex-col gap-10 md:flex-row  md:justify-between px-[50px]'>
        <div className='testimonial-text md:w-[40%] h-auto md:h-[80%] w-[100%]  pt-[100px]'>
          <h1 className=' text-[18px] md:text-[25px]'>Testimonial</h1>
          <p className='text-[12px] text-[#9d989e] md:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magnam ipsam fugiat repudiandae distinctio mollitia pariatur vitae accusantium, voluptas cum aliquid id voluptatum iusto.</p>
          <div className='flex mt-5'>
            <img src={pfp1} alt="" className='w-[30px] h-[30px] object-cover rounded-full border-2 border-white-500' />
            <img src={pfp2} alt="" className='w-[30px] h-[30px] object-cover rounded-full ml-[-4px] border-2 border-[#fff]-500' />
            <img src={pfp3} alt="" className='w-[30px] h-[30px] object-cover rounded-full ml-[-4px] border-2 border-[#fff]-500' />
            <img src={pfp4} alt="" className='w-[30px] h-[30px] object-cover rounded-full ml-[-4px] border-2 border-[#fff]-500' />
            <div className='w-[30px] h-[30px] bg-[#8d27ae] rounded-full ml-[-4px] flex justify-center items-center'>
              <p className='text-[8px] text-[#fff]'>2k+</p>
            </div>
          </div>
        </div>
        <div className='testimonial-slide w-[100%] mt-5  md:w-[50%]  md:h-[80%] relative '>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper-testimonial h-[100%]"
          >
            {/* <div className='move best-seller-move-left-btn mr-[1px] w-[30px] h-[30px] bg-[#f7f9f6] rounded-[100%] absolute left-[-5%] top-[40%] z-[99px] flex justify-center items-center cursor-pointer'>
              <FaArrowLeft className='text-[#96879a] text-[10px]' />
            </div>
            <div className='move best-seller-move-right-btn mr-[1px] w-[30px] h-[30px] bg-[#f7f9f6] rounded-[100%] absolute right-[-5%] top-[40%] z-[99px] flex justify-center items-center cursor-pointer'>
              <FaArrowRight className='text-[#96879a] text-[10px]' />
            </div> */}
            <SwiperSlide className='swiper-slide-testimonial rounded-[5px]'>
              <div className='flex justify-center mt-5 gap-[5px]'>
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ccc] text-[8px] lg:text-[12px]' />
              </div>
              <div className='comments mt-10 text-center text-[10px] lg:text-[14px] w-[90%] lg:w-[60%] mx-auto'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi sed fugiat sunt libero. Magni soluta rerum neque?</p>
              </div>
              <div className='user-name text-center mt-5'>
                <h3 className=' text-[8px] lg:text-[14px]'>Bola Ahmed</h3>
                <p className=' text-[6px] lg:text-[11px]'>Book lover</p>
              </div>
              <div className='images w-[50px] h-[50px] flex justify-center items-center mx-auto relative top-[10%] lg:top-[8%] z-[99]'>
                <img src={pfp2} alt="" className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  rounded-full object-cover ' />
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper-slide-testimonial rounded-[5px]'>
              <div className='flex justify-center mt-5 gap-[5px]'>
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ccc] text-[8px] lg:text-[12px]' />
              </div>
              <div className='comments mt-10 text-center text-[10px] lg:text-[14px] w-[90%] lg:w-[60%] mx-auto'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque distinctio iste.</p>
              </div>
              <div className='user-name text-center mt-5'>
                <h3 className=' text-[8px] lg:text-[14px]'>Harry Podolski</h3>
                <p className=' text-[6px] lg:text-[11px]'>Book lover</p>
              </div>
              <div className='images w-[50px] h-[50px] flex justify-center items-center mx-auto relative top-[10%] lg:top-[12%] z-[99]'>
                <img src={pfp1} alt="" className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] rounded-full object-cover ' />
              </div>
            </SwiperSlide>

            <SwiperSlide className='swiper-slide-testimonial rounded-[5px]'>
              <div className='flex justify-center mt-5 gap-[5px]'>
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ef7404] text-[8px] lg:text-[12px]' />
                <FaStar className='text-[#ccc] text-[8px] lg:text-[12px]' />
              </div>
              <div className='comments mt-10 text-center text-[10px] lg:text-[14px] w-[90%] lg:w-[60%] mx-auto'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, assumenda aliquid quaerat temporibus obcaecati ullam.</p>
              </div>
              <div className='user-name text-center mt-5'>
                <h3 className=' text-[8px] lg:text-[14px]'>James Hernandes</h3>
                <p className=' text-[6px] lg:text-[11px]'>Book lover</p>
              </div>
              <div className='images w-[50px] h-[50px] flex justify-center items-center mx-auto relative top-[10%] lg:top-[8%] z-[99]'>
                <img src={pfp3} alt="" className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  rounded-full object-cover ' />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials