import './App.css';

import CatsHeader from './CatsHeader';
import CatsMain from './CatsMain';
import Footer from './Footer';
import SkipLink from './SkipLink';

function Cats({setPage}) {
  return (
    <>
      <SkipLink targetId="main-content"/>
      <CatsHeader setPage={setPage}/>
      <CatsMain setPage={setPage}/>
      <Footer setPage={setPage}/>
    </>
  );
}

export default Cats;