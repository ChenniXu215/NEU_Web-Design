import SkipLink from "./SkipLink";
import FoodHeader from './FoodHeader';
import FoodMain from "./FoodMain";
import Footer from "./Footer";

function Food({setPage}) {
    return (
      <>
        <SkipLink targetId="main-content"/>
        <FoodHeader setPage={setPage}/>
        <FoodMain/>
        <Footer setPage={setPage}/>
      </>
    );
  }
  
  export default Food;