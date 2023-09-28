import React from 'react'

function FlashSale(props) {
    const {Hour, Minutes, Seconds } = props
  return (
    <React.Fragment>
        <div className='flash-sale w-[100%] flex justify-between items-center bg-[#5b067d] h-[60vh] mt-10'>
            <div className='w-[45%]  h-[80%]'>
                <div className=' w-[80%]  mx-auto h-[100%] flex flex-col flash-sale-text'>
                    <h1>Flash Sale</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quia quas iusto distinctio exercitationem eius cupiditate modi amet illo laudantium recusandae minima odio vero, explicabo, aspernatur voluptatum quam fugiat? Repellendus?</p>
                    <div className='time border border-[#ffedff67] w-[60%] h-[70px] mt-10 rounded-[10px] flex justify-center gap-5 items-center'>
                        <div>
                            <h2>{Hour}</h2>
                            <p>Hours</p>
                        </div>
                        <div>
                            <h2>{Minutes}</h2>
                            <p>Minutes</p>
                        </div>
                        <div>
                            <h2>{Seconds}</h2>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default FlashSale