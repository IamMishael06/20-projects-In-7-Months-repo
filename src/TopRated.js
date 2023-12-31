import React from 'react'
import { FaArrowRight,FaArrowLeft, FaStar, FaShoppingBasket } from 'react-icons/fa';
import 'swiper/css';
import BookOne from './assests/book1.jpg';
import BookTwo from './assests/book2.jpg';
import BookThree from './assests/book3.jpg';
import BookFour from './assests/book4.jpeg';
import BookFive from './assests/book5.jpeg';
import BookSix from './assests/book6.jpeg';
import BookSeven from './assests/book7.png';
import BookEight from './assests/book8.png';
import BookNine from './assests/book9.jpeg';
import BookTen from './assests/book10.jpeg';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';

function TopRated() {
  const books = [
    {
      background: BookOne,
      title: 'A Teaspoon of Earth and Sea',
      Author: 'Dina Nayeri',
      price: `$ ${19.23}`
    },
    {
      background: BookTwo,
      title: 'When the Dove disappered',
      Author: 'Sofi Oksanen',
      price: `$ ${15.23}`
    },
    {
      background: BookThree,
      title: 'Went the day well',
      Author: 'Penelope Houston',
      price: `$ ${17.23}`
    },
    {
      background: BookFour,
      title: 'George Orwell',
      Author: 'George Orwell',
      price: `$ ${12.23}`
    },
    {
      background: BookFive,
      title: 'Sorry for your loss',
      Author: 'Denis Bowman',
      price: `$ ${9.23}`
    },
    {
      background: BookSix,
      title: "When you ask me where i'm going",
      Author: 'Suzki Mark',
      price: `$ ${25.23}`
    },
    {
      background: BookSeven,
      title: "Late Night Thoughts",
      Author: 'Vla',
      price: `$ ${13.26}`
    },
    {
      background: BookEight,
      title: "Peter and the Wolf",
      Author: 'Sergei Prokofiev',
      price: `$ ${15.13}`
    },
    {
      background: BookNine,
      title: "Making the climb",
      Author: 'John C. Bowling',
      price: `$ ${8.03}`
    },
    {
      background: BookTen,
      title: "  Moby Dick",
      Author: 'Herman Melville',
      price: `$ ${29.22}`
    }

  ]
  const TopBooks = books.map(book => <SwiperSlide key={book.title} className='swipe-element flex flex-col h-[100%] justify-between'><img src={book.background} alt="" />
    <div className='flex justify-between items-center w-[90%] lg:w-[70%] mx-auto stars'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
    <div className='title mx-auto w-[80%] h-[20%] mt-2'>
      <h1 className='text-[14px] lg:text-[16px] text-center lg:text-[left]'>{book.title}</h1>
      <p className='text-[10px]  lg:text-[16px] text-center lg:text-[left]'>{book.Author}</p>
    </div>
    <div className='w-[80%] mx-auto align-bottom mt-2 price-sec flex justify-between items-center'>
      <h1 className='price pl-3'>{book.price}</h1>
      <div className='basket-div bg-[#812c9a] w-[20%]  rounded-[100%] flex justify-center sm:w-[20%] items-center h-[80%] relative left-[7%] md:w-[20%]'>
        <FaShoppingBasket className='basket text-[#fff]' />
      </div>
    </div>
  </SwiperSlide>)



  return (
    <>
      <div className='top-rated h-auto lg:h-[80vh] w-[100%] justify-center flex items-center'>
        <div className='w-[100%] py-[30px] mt-5 lg:py-0 h-[90%] bg-[#fdf8fe] flex flex-col justify-center overflow-hidden'>
          <div className='top-rated-header w-[90%] mb-10  h-[20%] mx-auto flex justify-between items-center'>
            <h1 className='text-[15px] md:text-[15px] lg:[20px]'>10 Top Rated Books</h1>
            <button className='flex items-center justify-between w-[90px] lg:w-[10%]'>
              <p>View More</p>
              <FaArrowRight />
            </button>
          </div>
          <div className='swipe w-[95%] mx-auto gap-3 lg:gap-0  h-[95%] relative flex items-center justify-center overflow-scroll'>
            <div className='move top-rated-move-left-btn ml-[5px]  w-[60px] h-[60px] bg-[#f7f9f6] rounded-[100%] relative z-[99px] flex justify-center items-center cursor-pointer'>
              <FaArrowLeft className='text-[#98899a] ' />
            </div>
            {/* <div className='absolute w-[300px] bg-[#fffbff] left-0 h-[100%] blur-[20px] rounded-[99px]'>

            </div> */}
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              freeMode={true}
              navigation={
                  {
                    prevEl: '.top-rated-move-left-btn', // Use your custom class here
                  nextEl: '.top-rated-move-right-btn', // Use your custom class here
                  }
              }
              
              autoplay={{
                delay: 3600,
                disableOnInteraction: false,
              }}
              breakpoints={{
                // When window width is >= 1024px
                1024:{
                  slidesPerView: 6,
                  pagination: {
                    clickable: true,
                  }
                },
                // // When window width is >= 800px
                // 800: {
                //   slidesPerView: 2,
                //   pagination:{
                //     clickable: true,
                //   }
                // },
                // When window width is < 800px
                0: {
                  slidesPerView: 1,
                  pagination: {
                    clickable: false,
                  },
                },
              }}
              modules={[Autoplay,FreeMode, Navigation, Pagination]}
              className="mySwiper third-swiper  w-[100%] md:w-[30%] lg:w-[100%]"
            >
              {TopBooks}
            </Swiper>
            <div className='move top-rated-move-right-btn mr-[5px]  w-[60px] h-[60px] bg-[#f7f9f6] rounded-[100%] relative z-[99px] flex justify-center items-center cursor-pointer'>
              <FaArrowRight className='text-[#98899a]'/>
            </div>
            {/* <div className='absolute w-[600px] bg-[#fffbff] right-0 h-[100%] blur-[20px] rounded-[99px]'>

            </div> */}
          </div>


        </div>
      </div>
    </>
  )
}

export default TopRated