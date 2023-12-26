import SkipLink from "./SkipLink";
import HealthHeader from "./HealthHeader";
import HealthMain from "./HealthMain";
import Footer from "./Footer";

function Health({setPage}) {
    return (
      <>
        <SkipLink targetId="main-content"/>
        <HealthHeader setPage={setPage}/>
        <HealthMain/>
        <Footer setPage={setPage}/>
      </>
    );
  }
  
  export default Health;