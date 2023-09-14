import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import Herosec from "./Herosec";
import './assests/landingPage.css';
import WhyChooseUs from "./WhyChooseUs";
function App() {
  return (
    <div>
       <FirstNav/>
       <SecondNav/>
       <Herosec customer ="25,654"/>
       <WhyChooseUs/>
    </div>
  );
}

export default App;
