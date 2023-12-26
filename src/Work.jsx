import './App.css';

import WorkHeader from './WorkHeader';
import WorkMain from './WorkMain';
import Footer from './Footer';
import SkipLink from './SkipLink';

function Work({setPage}) {
  return (
    <>
      <SkipLink targetId="main-content"/>
      <WorkHeader setPage={setPage}/>
      <WorkMain/>
      <Footer setPage={setPage}/>
    </>
  );
}

export default Work;