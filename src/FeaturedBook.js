import React from 'react'
import { FaArrowRight, FaStar, FaArrowLeft } from 'react-icons/fa';
import 'swiper/css';
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
function FeaturedBook() {
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
    const BestSellers = books.map(book =>  <SwiperSlide className='w-[60%] h-[100%] border-2 border-red-900'>

    </SwiperSlide>)
    return (
        <>
            <div className='h-[80vh] mt-[5vh]'>
                <div className='top-rated-header w-[90%] flex justify-between mx-auto'>
                    <h1>Featured Book</h1>
                    <button className='flex items-center justify-between w-[5%]'>
                        <p>View More</p>
                        <FaArrowRight />
                    </button>
                </div>
                {/* =======SWIPER AREA======= */}
                <div className='w-[100%] mx-auto h-[80%] mt-[5%] border-2 border-red-50 relative'>
                    <div className='move featured-move-right-btn mr-[5px] w-[60px] h-[55px] bg-[#f7f9f6] rounded-[100%] absolute left-[15%] top-[40%] z-[99px] flex justify-center items-center cursor-pointer'>
                        <FaArrowLeft className='text-[#98899a] ' />
                    </div>
                    <div className='move featured-move-right-btn mr-[5px] w-[60px] h-[55px] bg-[#f7f9f6] rounded-[100%] absolute right-[15%] top-[40%] z-[99px] flex justify-center items-center cursor-pointer'>
                        <FaArrowRight className='text-[#98899a]' /> 
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
                        className="mySwiper feature-swiper w-[100%] h-[100%]"
                    >
                        {BestSellers}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FeaturedBook