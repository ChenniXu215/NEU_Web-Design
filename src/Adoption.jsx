import SkipLink from "./SkipLink";
import AdoptionHeader from "./AdoptionHeader";
import AdoptionMain from "./AdoptionMain";
import Footer from "./Footer";

function Adoption({setPage}) {
    return (
      <>
        <SkipLink targetId="main-content"/>
        <AdoptionHeader setPage={setPage}/>
        <AdoptionMain/>
        <Footer setPage={setPage}/>
      </>
    );
  }
  
  export default Adoption;