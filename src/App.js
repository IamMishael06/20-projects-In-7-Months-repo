import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import Herosec from "./Herosec";
import './assests/landingPage.css';
import WhyChooseUs from "./WhyChooseUs";
import TrendingBooks from "./TrendingBooks";
import TopRated from "./TopRated";
import BestSellers from "./BestSellers";
import FlashSale from "./FlashSale";
import FeaturedBook from "./FeaturedBook";

// import BookOne from './assests/book1.jpg';
// import BookTwo from './assests/book2.jpg';
// import BookThree from './assests/book3.jpg';
// import BookFour from './assests/book4.jpeg';
// import BookFive from './assests/book5.jpeg';
// import BookSix from './assests/book6.jpeg';
function App() {
  return (
    <div>
       <FirstNav/>
       <SecondNav/>
       <Herosec customer ="25,654"/>
       <WhyChooseUs/>
       <TrendingBooks/>
       <TopRated/>
       <BestSellers/>
       <FlashSale />
       <FeaturedBook />

    </div>
  );
}

export default App;
