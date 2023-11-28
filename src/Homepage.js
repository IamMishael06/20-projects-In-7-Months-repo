import React from 'react'
import FirstNav from './FirstNav';
// import SecondNav from "./SecondNav";
import Herosec from "./Herosec";
import './assests/landingPage.css';
import WhyChooseUs from "./WhyChooseUs";
import TrendingBooks from "./TrendingBooks";
import TopRated from "./TopRated";
import BestSellers from "./BestSellers";
import FlashSale from "./FlashSale";
import FeaturedBook from "./FeaturedBook";
import LatestNews from './LatestNews';

function Homepage() {
  return (
    <div>
       <FirstNav/>
       <Herosec customer ="25,654"/>
       <WhyChooseUs/>
       <TrendingBooks/>
       <TopRated/>
       <BestSellers/>
       {/* <FlashSale />
       <FeaturedBook />
       <LatestNews /> */}
    </div>
  )
}

export default Homepage