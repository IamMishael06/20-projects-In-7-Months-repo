import React from 'react'
import children from './assests/child-reading.jpeg'
import book from './assests/books.webp'
import currentBooks from './assests/2023books.jpeg'
import bookshelf from './assests/bookshelf.jpeg'
import pfp1 from './assests/pfp2.webp'
import pfp2 from './assests/pfp3.jpeg'
import pfp3 from './assests/pfp4.jpeg'
import pfp4 from './assests/pfp1.webp'
import {FaArrowRight} from 'react-icons/fa';
function LatestNews() {
    const news = [
        {
            image : children ,
            title : 'Why reading is Important to our children?',
            desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti laborum rem deserunt quae beatae ullam ratione nihil placeat minus qui.',
            username : 'John Macaroo',
            pfp : pfp1
        },
        {
            image : book ,
            title : 'Benefit of reading: Smart, Diligent, Happy',
            desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti laborum rem deserunt quae beatae ullam ratione nihil placeat minus qui.',
            username : 'Tarilate Namikpoh',
            pfp : pfp2
        },
        {
            image : currentBooks,
            title : 'What books you should read in 2023?',
            desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti laborum rem deserunt quae beatae ullam ratione nihil placeat minus qui.',
            username : 'Issac Monroe',
            pfp : pfp3
        },
        {
            image : bookshelf ,
            title : '10 things you must know to improve your reading skills',
            desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti laborum rem deserunt quae beatae ullam ratione nihil placeat minus qui.',
            username : 'Roman Paul',
            pfp : pfp4
        }
    ]
    const showNew = news.map(item => <div className='w-[100%] mt-5 h-[400px] md:w-[24%]'>
        <div className='w-[100%]'>
            <img src={item.image} alt="" className='rounded-[10px] h-[20%]'/>
        </div>
        <div className='news-title mt-5 h-[10%]'>
            <p>{item.title}</p>
        </div>
        <div className='new-title mt-5'>
        <h6 className='leading-[20px]'>{item.desc}<a href="#" className='text-[#9a30b4] font-bold'>...Continue reading</a></h6>
        </div>
        <div className='pfp-area w-[80%] mt-3 flex flex-wrap items-center gap-5 md: flex-nowrap '>
            <img src={item.pfp} alt="" className='w-[60px] h-[60px] rounded-[50%]' />
            <div>
                <p className='font-bold'>{item.username}</p>
                <p className='text-[#c5c5c5] text-[13px]'>20th August 2023</p>
            </div>
        </div>
    </div>)
  return (
    <React.Fragment>
        <div className='w-[90%] mx-auto mt-20 latest'>
            <div className='latest-head'>
                <h1 className='text-center '>Latest News</h1>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quia aspernatur magni sint, explicabo hic.</p>
            </div>
            <div className='w-[100%] h-auto flex gap-4 flex-wrap md: justify-between mt-5'>
                {showNew}
            </div>
                <button className='w-[80%] mx-auto justify-center h-[60px] rounded-[10px] text-[#FFFAFA] text-[14px] bg-[#8e28af] flex items-center mt-10 gap-2 hover:bg-[#452051] transition-[0.3s] md:mt-[100px] md:w-[15%] '>View More <FaArrowRight/></button>
        </div>
    </React.Fragment>
  )
}

export default LatestNews