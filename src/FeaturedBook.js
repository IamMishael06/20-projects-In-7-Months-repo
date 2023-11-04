import React from 'react'
import { FaArrowRight, FaStar, FaArrowLeft, FaShoppingBasket, FaHeart } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import BookTwo from './assests/book2.jpg';
import BookThree from './assests/book3.jpg';
import BookTen from './assests/book11.jpeg';
import BookEight from './assests/book8.png';
import BookTwe from './assests/book12.jpeg';
function FeaturedBook() {
    function changeHeart() {
        var hearts = document.querySelectorAll('.heart-icon');
        var heartContainers = document.querySelectorAll('.heart');

        hearts.forEach(function (heart) {
            heart.classList.toggle('active');
        });

        heartContainers.forEach(function (heartContainer) {
            heartContainer.classList.toggle('active');
        });
    }
    const books = [
        {
            background: BookThree,
            title: 'Went the day well',
            Author: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero  dolor sit amet consectetur adipisicing elit. Quibusdam vero est architecto quia dolore id perferendis quidem laboriosam!',
            price: `$ ${19.23}`,
            type: 'Adventure',
            prevPrice: `$ ${23.13}`,
            rating: ` ${3.5}`,
            reviews: `${450}`
        },
        {
            background: BookTwo,
            title: 'When the Doves disappered',
            Author: 'Lorem, ipsum dolor sit amet dolor sit amet consectetur adipisicing elit. Quibusdam vero  consectetur adipisicing elit. Quibusdam vero est architecto quia dolore id perferendis quidem laboriosam!',
            price: `$ ${15.23}`,
            prevPrice: `$ ${18.23}`,
            type: 'Romance',
            rating: ` ${3.6}`,
            reviews: `${450}`
        },
        {
            background: BookEight,
            title: "Peter and the Wolf",
            Author: 'Lorem, ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Quibusdam vero  adipisicing elit. Quibusdam vero est architecto quia dolore id perferendis quidem laboriosam!',
            price: `$ ${24.99}`,
            prevPrice: `$ ${38.13}`,
            type: 'Fantasy',
            rating: ` ${4.5}`,
            reviews: `${450}`
        },
        {
            background: BookTen,
            title: "  Moby Dick",
            Author: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolor sit amet consectetur adipisicing elit. Quibusdam vero  vero est architecto quia dolore id perferendis quidem laboriosam!',
            price: `$ ${12.23}`,
            prevPrice: `$ ${19.13}`,
            type: 'Adventure',
            rating: ` ${4.7}`,
            reviews: `${450}`
        },
        {
            background: BookTwe,
            title: 'Satellite',
            Author: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolor sit amet consectetur adipisicing elit. Quibusdam vero  animi alias placeat enim quas blanditiis.',
            price: `$ ${19.23}`,
            prevPrice: `$ ${20.13}`,
            type: 'Sci-fi',
            rating: ` 4.0`,
            reviews: `${450}`
        },
    ]
    const BestSellers = books.map(book => <SwiperSlide className='feature-swiper-slide w-[80%] h-[100%]'>
        <div className='feature-info-area w-[90%] h-[80%] mx-auto flex justify-between mt-10'>
            <div className='w-[40%] h-[100%] flex '>
                <img src={book.background} alt="" className='rounded-[50px] h-[100%]' />
            </div>
            <div className='w-[55%] mt-3'>
                <div className='flex items-center  gap-4'>
                    <div className='type bg-[#f2dff7] w-[20%] h-[30px] rounded-[5px]'>
                        <p className='text-center text-[#9d83a4]'>{book.type}</p>
                    </div>
                    <div className='flex w-[20%]   justify-between'>
                        <FaStar className='text-[#ef7404]' />
                        <FaStar className='text-[#ef7404]' />
                        <FaStar className='text-[#ef7404]' />
                        <FaStar className='text-[#ef7404]' />
                        <FaStar className='four-star text-[#9d999f]' />
                    </div>
                    <div className='flex featured-reviews'>
                        <h2>{book.reviews}</h2><span className='pl-2'>Reviews</span>
                    </div>
                </div>
                <div className='feature-title mt-3'>
                    <h1>{book.title}</h1>
                </div>
                <div className='mt-4 feature-desc'>
                    <p className='text-[#a7a6a6] '>{book.Author}</p>
                </div>
                <div className='w-[100%] bestseller-price flex items-center mt-5'>
                    <p className='text-[#85578d] text-[35px]'>{book.price}</p><h4 className='pl-3 text-[20px]'>{book.prevPrice}</h4>
                </div>
                <div className='mt-5 w-[70%] flex items-center gap-6'>
                    <button className='flex items-center gap-2 w-[40%] justify-center h-[50px] rounded-[5px] bg-[#8a25aa] text-[#f6f4f4] add-to-cart'><FaShoppingBasket />Add to Cart</button>
                    <button onClick={changeHeart} className='heart w-[20%] h-[50px] flex items-center justify-center rounded-[5px]'><FaHeart className='heart-icon' /></button>
                    <button className='w-[30%] text-[12px] text-[#8a25aa] font-bold'>View Details</button>
                </div>
            </div>
        </div>
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
                <div className='w-[100%] mx-auto h-[80%] mt-[5%]  relative'>
                    <div className='move best-seller-move-left-btn mr-[5px] w-[60px] h-[55px] bg-[#f7f9f6] rounded-[100%] absolute left-[15%] top-[40%] z-[99px] flex justify-center items-center cursor-pointer'>
                        <FaArrowLeft className='text-[#96879a] ' />
                    </div>
                    <div className='move best-seller-move-right-btn mr-[5px] w-[60px] h-[55px] bg-[#f7f9f6] rounded-[100%] absolute right-[10%] top-[40%] z-[99px] flex justify-center items-center cursor-pointer'>
                        <FaArrowRight className='text-[#96879a]' />
                    </div>
                    <Swiper
                        slidesPerView={1.5}
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
                        modules={[FreeMode, Navigation, Pagination]}
                        className=" feature-swiper w-[100%] h-[100%]"
                    >
                        {BestSellers}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FeaturedBook