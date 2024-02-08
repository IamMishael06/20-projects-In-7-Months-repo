import React, { useEffect, useState } from 'react'
import { FaArrowRight,FaArrowLeft, FaStar, FaShoppingBasket } from 'react-icons/fa';
import BookThree from './assests/book3.jpg';
import BookFour from './assests/book4.jpeg';
import BookFive from './assests/book5.jpeg';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
function FlashSale(props) {
  // const {Hour, Minutes, Seconds } = props

  const [counter, setCounter] = useState(59);
  const [minute, setMinuteCounter] = useState(59)
  const [hour, setHour] = useState(12)

  // For seconds ///////////////////////
  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease the counter by 1
      setCounter((prevCounter) => {
        if (prevCounter === 1) {
          // If counter reaches 0, restart it at 60
          return 59;
        } else {
          return prevCounter - 1;
        }
      });
    }, 1000);
    //   prevminute

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on component mount


  // For Minutes ///////////////////////////
  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease the counter by 1
      setMinuteCounter((prevminute) => {
        if (prevminute === 1) {
          // If counter reaches 0, restart it at 60
          return 59;
        } else {
          return prevminute - 1;
        }
      });
    }, 60000);
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on component mount

  //   for HOURS
  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease the counter by 1
      setHour((prevHour) => {
        if (prevHour === 1) {
          // If counter reaches 0, restart it at 60
          return 0;
        } else {
          return prevHour - 1;
        }
      });
    }, 3600000);


    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on component mount


  // SWIPER
  const books = [
    {
      background: BookThree,
      title: 'Went the day well',
      Author: 'Penelope Houston',
      price: `$ ${17.23}`,
      type: 'Adventure',
      prevPrice: `$ ${24.23}`,
      bookLeft : `${3} books left`,
    },
    {
      background: BookFour,
      title: 'George Orwell',
      Author: 'George Orwell',
      price: `$ ${12.23}`,
      type: 'Biography',
      prevPrice: `$ ${18.23}`,
      bookLeft : `${10} books left`
    },
    {
      background: BookFive,
      title: 'Sorry for your loss',
      Author: 'Denis Bowman',
      price: `$ ${9.23}`,
      type: 'Fiction',
      prevPrice: `$ ${14.23}`,
      bookLeft : `${22} books left`
    },
  ]
  const pickBook = books.map((book) =>  <SwiperSlide key={book.title} className='flash-sale-slide  border-2 border-red-500'>
    <div className='w-[100%] h-auto border-2 border-blue-500 lg:w-[95%] mx-auto lg:h-[100%] flex justify-center items-center rounded-[20px] bg-[#310042]'>
     <div className='flex-col md:flex justify-between items-center gap-5 w-[100%] h-[90%]'>
      <div className='pic-sec-flash-sale w-[35%] ml-[3%] h-[100%] rounded-[15px]'>
         <img src={book.background} alt=""  className='h-[100%] rounded-[15px]'/>
      </div>
      <div className='w-[60%] h-[100%] flex flex-col gap-2 second-part-two'>
        <div className='h-[8%] w-[80%] flex justify-between items-center flash-sale-star'>
          <p>{book.type}</p>
          <div className='flex gap-4 items-center'>
            <FaStar className='text-[#ef7404]'/>
            <FaStar className='text-[#ef7404]'/>
            <FaStar className='text-[#ef7404]'/>
            <FaStar className='text-[#ef7404]'/>
            <FaStar className='four-star text-[#fff]'/>
            <h6 className='text-[#fff]'>(450)</h6>
          </div>
        </div>
        <div className='name-flash-sale'>
          <h1>{book.title}</h1>
          <h3>{book.Author}</h3>
        </div>
        <div className='w-[100%] bestseller-price flex items-center mt-5'>
             <p className='text-[#932eb4] text-[30px]'>{book.price}</p><h4 className='pl-3 text-[#9d76ab]'>{book.prevPrice}</h4>
        </div>
        <div className='flex justify-between w-[70%] items-center h-[20%'>
          <div className='progress-line' >

          </div>
          <div className='basket-bg w-[50px] h-[50px] flex justify-center items-center rounded-[100%] bg-[#ba0ef3]'>
            <FaShoppingBasket className='text-[#fff]'/>
          </div>
        </div>
        <div className='book-left'>
          <p className='text-[#764d87]'>{book.bookLeft}</p>
        </div>
      </div>
     </div>
    </div>
  </SwiperSlide> )
  return (
    <React.Fragment>
      <div className='flash-sale w-[100%] md:flex lg:justify-between lg:items-center bg-[#5b067d] h-auto md:h-[60vh] mt-10 pt-10 relative'>
        <div className='purple-noise hidden lg:block absolute w-[300px] h-[400px] rounded-[100%] right-[-9%]'></div>
        <div className='purple-noise hidden lg:block  absolute w-[200px] h-[400px] rounded-[100%] left-[30%]'></div>
        <div className='lg:w-[45%] w-[100%] mx-auto  h-[80%]'>
          <div className=' w-[80%]  mx-auto h-[100%] flex flex-col flash-sale-text'>
            <h1>Flash Sale</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quia quas iusto distinctio exercitationem eius cupiditate modi amet illo laudantium recusandae minima odio vero, explicabo, aspernatur voluptatum quam fugiat? Repellendus!!!!</p>
            <div className='time border border-[#ffedff67] w-[80%] lg:w-[60%] h-[70px] mt-10 rounded-[10px] flex justify-center gap-5 items-center'>
              <div>
                <h2>{hour}</h2>
                <p>Hours</p>
              </div>
              <div>
                <h2>{minute}</h2>
                <p>Minutes</p>
              </div>
              <div>
                <h2>{counter}</h2>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flash-sale-swiper-div w-[100%]  border-2 border-red-500  h-[80%] mx-auto mt-5 lg:mt-0 relative'>
        <div className='move flash-sale-move-left-btn ml-[5px] w-[60px] h-[60px] bg-[#f7f9f6] rounded-[100%] absolute top-40 left-[-5%] z-[99px] flex justify-center items-center cursor-pointer'>
              <FaArrowLeft className='text-[#98899a] ' />
            </div>
          <Swiper
            slidesPerView={1.3}
            spaceBetween={30}
              freeMode={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024:{
                    slidesPerView: 1.3,
                    pagination: {
                      clickable: true,
                    }
                  },
                // When window width is < 800px
                0: {
                  slidesPerView: 1,
                  pagination: {
                    clickable: false,
                  },
                },
              }}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
              clickable: true,
            }}
            navigation={
              {
                prevEl: '.flash-sale-move-left-btn', // Use your custom class here
                nextEl: '.flash-sale-move-right-btn', // Use your custom class here
              }
          }
            modules={[Autoplay,FreeMode, Navigation, Pagination]}
            className='flash-sale-swiper'
          >
           {pickBook}
          </Swiper>
          <div className='move flash-sale-move-right-btn lg:ml-[5px] w-[60px] h-[60px] bg-[#f7f9f6] rounded-[100%] absolute right-[5%] top-40 z-[99px] flex justify-center items-center cursor-pointer'>
              <FaArrowRight className='text-[#98899a] ' />
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FlashSale