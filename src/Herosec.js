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
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
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
    const bookBackground = books.map(book => <SwiperSlide className='cards'>
        <img src={book.background} alt="" />
        <div className='absolute w-[30%] h-[50px] bg-[#f77c08] z-99 top-[20%] flex items-center justify-center'>
            <p>Best Seller</p>
        </div>
    </SwiperSlide>)
    return (
        <>
            <div className='hero-page w-[100%] h-[83vh] bg-[#461356] relative flex justify-center items-center '>
                <div className='blue-semicircle absolute bottom-[-1%] z-[] w-[300px] h-[300px] rounded-[50%] left-[-7%] bg-[#014868]'></div>
                <div className='middle-box absolute  left-[50%] top-[10%]  w-[150px] h-[150px] rounded-[50%] bg-[#572152]'></div>
                <div className='w-[80%] h-[80%]  mx-auto flex flex-wrap justify-between items-center hero-box relative z-[2] '>
                    <div className='w-[40%] h-[80%] text-area flex flex-col justify-between '>
                        <div className='h-[60%]'>
                            <h1 className='text-[50px]'>Welcome to <span>Mars</span> Online Book Store</h1>
                            <p className='text-[#976da7]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ratione eveniet laboriosam blanditiis. Quos ipsum corrupti optio obcaecati illum numquam vel corporis.</p>
                        </div>
                        <div className='second-part w-[60%] h-[30%] '>
                            <div className='flex items-center w-[100%] justify-between'>
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
                            <div className='collection-btn mt-5'>
                                <button className='w-[80%] h-[6vh] bg-[#de156d] rounded-[5px] flex items-center pl-5'>Go to Collections <FaArrowRight className='pl-[5px]' /></button>
                            </div>
                        </div>

                    </div>
                    <div className='w-[50%] h-[80%] flex items-center justify-center'>
                        <Swiper 
                            // install Swiper modules
                            modules={[Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={2}
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