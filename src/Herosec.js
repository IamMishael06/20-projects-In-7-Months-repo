import React from 'react'
import { FaBook, FaUser, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BookOne from './assests/book1.jpg';
import BookTwo from './assests/book2.jpg';
import BookThree from './assests/book3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
function Herosec(props) {
    const books = [
        {
            background : BookOne,
        },
        {
            background : BookTwo
        },
        {
            background : BookThree
        }
    ]
    const {customer} = props
    const bookBackground = books.map(book => <SwiperSlide key={book.background} className='cards w-[100%]'>
        <img src={book.background} alt="" />
        <div className='absolute w-[40%] h-[50px] bg-[#f77c08] z-99 top-[10%] flex items-center justify-center md:top-[20%] md:w-[30%]'>
            <p>Best Seller</p>
        </div>
    </SwiperSlide>)
    return (
        <>
            <div className='hero-page w-[100%] h-auto bg-[#461356] py-[40px] relative flex justify-center items-center lg:h-[83vh] lg:py-0'>
                <div className='blue-semicircle absolute bottom-[-1%] z-[] w-[300px] h-[300px] rounded-[50%] left-[-7%] bg-[#014868]'></div>
                <div className='middle-box absolute  left-[50%] top-[10%]  w-[150px] h-[150px] rounded-[50%] bg-[#572152]'></div>
                <div className='w-[80%] h-[80%]  mx-auto flex flex-col  justify-between items-center hero-box relative z-[2] md:flex-row 0 md:items-center md:w-[90%] lg:w-[80%]'>
                    <div className='w-[100%] h-[80%] text-area flex flex-col justify-between md:w-[40%]'>
                        <div className='h-[60%]'>
                            <h1 className='text-[40px] text-center md:text-[50px] md:text-left'>Welcome to <span>Mars</span> Online Book Store</h1>
                            <p className='text-[#976da7] text-center md:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ratione eveniet laboriosam blanditiis. Quos ipsum corrupti optio obcaecati illum numquam vel corporis.</p>
                        </div>
                        <div className='second-part w-[100%] h-[30%] mt-[30px] md:w-[60%]'>
                            <div className='flex items-center w-[80%] mx-auto justify-between flex-col md:mx-0 lg:flex-row lg:w-[100%]'>
                                <div className='stats'>
                                    <div className='flex items-center hero-stats'>
                                        <FaBook /><h1 className='pl-3'>68 + k</h1>
                                    </div>
                                    <p>Book collections</p>
                                </div>
                                <div className='stats'>
                                    <div className='flex items-center hero-stats'>
                                        <FaUser /><h1 className='pl-3'>{customer}</h1>
                                    </div>
                                    <p>Customer</p>
                                </div>

                            </div>
                            <div className='collection-btn mt-5 w-[100%]'>
                                <button className='w-[100%] mx-auto h-[6vh] bg-[#de156d]  rounded-[5px] flex items-center justify-center  lg:pl-5 lg:w-[80%] lg:mx-0 md:text-[12px] lg:text-[15px]'>Go to Collections <FaArrowRight className='pl-[5px]' /></button>
                            </div>
                        </div>

                    </div>
                    <div className='w-[100%] h-[400px] herosecswiper flex items-center mt-5 justify-center md:w-[50%] max-lg:h-[300px] md:h-[80%] '>
                        <Swiper 
                            // install Swiper modules
                            modules={[Autoplay,Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            breakpoints={{
                                // when window width is >= 768px
                                800: {
                                  slidesPerView: 2,
                                },
                                // when window width is < 768px
                                0: {
                                  slidesPerView: 1,
                                },
                              }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                              }}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className='w-[100%] h-[100%] swiper'
                                                          
                        >
                            {/* {books.map(book => <SwiperSlide>{book.background}</SwiperSlide>)} */}
                            {bookBackground}
                            
                            {/* { 
                                books.map(book=> <Swiperslide>{book.background}<Swiperslide/>)
                            } */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosec