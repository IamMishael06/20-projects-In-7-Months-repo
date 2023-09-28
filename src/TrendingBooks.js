import React from 'react'
import BookOne from './assests/book1.jpg';
import BookTwo from './assests/book2.jpg';
import BookThree from './assests/book3.jpg';
import BookFour from './assests/book4.jpeg';
import BookFive from './assests/book5.jpeg';
import BookSix from './assests/book6.jpeg';
import Pfp from './assests/pfp.jpeg';
import { FaStar } from 'react-icons/fa';
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
function TrendingBooks() {
    const books = [
        {
            background : BookOne,
        },
        {
            background : BookTwo
        },
        {
            background : BookThree
        },
        {
            background : BookFour
        },
        {
            background : BookFive
        },
        {
            background : BookSix
        }
    ]
    const bookBackground = books.map(book =><SwiperSlide className='slide'><img src={book.background} alt="" /></SwiperSlide>)
    return (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-around items-center'>
          <div className="w-[40%] trending-head">
            <h1 className='text-center'>Trending this week</h1>
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti
              ipsam obcaecati earum pariatur recusandae dicta nesciunt. Quis, asperiores nam!
            </p>
          </div>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Navigation]}
            className="mySwiper"
          >
            {bookBackground}
          </Swiper>
          <div className='user-in-trending w-[15%] relative'>
            <div className='w-[11vh] h-[10vh] mx-auto pfp  rounded-[99%] '>
              <img src={Pfp} alt="" className='w-[100%] h-[100%]  rounded-[99%]' />
            </div>
            <div className='w-[80%] pfp-name mx-auto'>
              <p className='w-[100%] text-center'>Jason Devon</p>
            </div>
          <div className='flex stars justify-between'>
          <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          </div>
        </div>
      );
    }

export default TrendingBooks