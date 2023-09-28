import React from 'react'
import 'swiper/css';
import { FaArrowRight, FaStar, FaArrowLeft } from 'react-icons/fa';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import BookTwo from './assests/book2.jpg';
import BookThree from './assests/book3.jpg';
import BookTen from './assests/book10.jpeg';
import BookEight from './assests/book8.png';
import BookTwe from './assests/book12.jpeg';

function BestSellers(props) {
    const books = [
        {
            background: BookThree,
            title: 'Went the day well',
            Author: 'Penelope Houston',
            price: `$ ${19.23}`,
            type: 'Adventure',
            rating: ` ${3.5}`
        },
        {
            background: BookTwo,
            title: 'When the Doves disappered',
            Author: 'Sofi Oksanen',
            price: `$ ${15.23}`,
            prevPrice: `$ ${18.23}`,
            type: 'Romance',
            rating: ` ${3.6}`
        },
        {
            background: BookEight,
            title: "Peter and the Wolf",
            Author: 'Sergei Prokofiev',
            price: `$ ${24.99}`,
            type: 'Fantasy',
            rating: ` ${4.5}`
        },
        {
            background: BookTen,
            title: "  Moby Dick",
            Author: 'Herman Melville',
            price: `$ ${12.23}`,
            prevPrice: `$ ${19.13}`,
            type: 'Adventure',
            rating: ` ${4.7}`
        },
        {
            background: BookTwe,
            title: 'Satellite',
            Author: 'Nick Lake',
            price: `$ ${19.23}`,
            type: 'Sci-fi',
            rating: ` 4.0`
        },
    ]
    const BestSellers = books.map(book =>
        <SwiperSlide className='bestseller-slide flex flex-row justify-between gap-[10px]'>
            <div className='flex flex-row justify-between gap-[10px] h-[90%]'>
                <div className='w-[40%] '>
                    <img src={book.background} alt="" className='rounded-[20px]' />
                </div>
                <div className='text-view flex flex-col gap-[15%] w-[55%]  items-center'>
                    <div className='type-boxes flex justify-between w-[100%]'>
                        <div className='type bg-[#f2dff7] w-[50%] h-[30px] rounded-[5px]'>
                            <p className='text-center text-[#9d83a4]'>{book.type}</p>
                        </div>
                        <div className='rating bg-[#ffd584] w-[40%] h-[30px] rounded-[5px] flex justify-center items-center'>
                            <FaStar className='text-[#ef7404]' />
                            <p className='pl-2 text-[#ef7404] text-[10px]'>{book.rating}</p>
                        </div>
                    </div>
                    <div className='title w-[100%]'>
                        <h1 className='text-[18px]'>{book.title}</h1>
                        <p className='text-[14px]'>{book.Author}</p>
                    </div>
                    <div className='w-[100%] bestseller-price flex items-center mt-5'>
                        <p className='text-[#85578d] text-[20px]'>{book.price}</p><h4 className='pl-3'>{book.prevPrice}</h4>
                    </div>
                </div>
            </div>

        </SwiperSlide>
    )
    const { oldPrice1 } = props
    return (
        <>
            <div className='best-seller w-[100%] flex flex-col justify-center mt-20'>
                <div className='top-rated-header w-[90%]  h-[20%] mx-auto flex justify-between items-center'>
                    <h1>Best Sellers</h1>
                    <button className='flex items-center justify-between w-[5%]'>
                        <p>View More</p>
                        <FaArrowRight />
                    </button>
                </div>
                <div className='fourth-swiper w-[90%] mx-auto h-[50vh] justify-center flex items-center'>
                    <div className='move best-seller-move-left-btn ml-[5px] w-[60px] h-[55px] bg-[#f7f9f6] rounded-[100%] relative left-[2%] z-[99px] flex justify-center items-center cursor-pointer'>
                        <FaArrowLeft className='text-[#98899a] ' />
                    </div>
                    <Swiper
                        slidesPerView={2.75}
                        spaceBetween={30}
                        freeMode={true}
                        navigation={
                            {
                                prevEl: '.best-seller-move-left-btn', // Use your custom class here
                                nextEl: '.best-seller-move-right-btn', // Use your custom class here
                            }
                        }
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Navigation,Pagination]}
                        className="mySwiper fourth-swipe w-[100%] "
                    >
                        {BestSellers}
                    </Swiper>
                    <div className='move best-seller-move-right-btn mr-[5px] w-[60px] h-[55px] bg-[#8724ad] rounded-[100%] relative right-[2%] z-[99px] flex justify-center items-center cursor-pointer'>
                        <FaArrowRight className='text-[#fff]' /> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSellers