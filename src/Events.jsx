import './App.css';

import EventsHeader from './EventsHeader';
import EventsMain from './EventsMain';
import Footer from './Footer';
import SkipLink from './SkipLink';

function Events({setPage}) {
  return (
    <>
      <SkipLink targetId="main-content"/>
      <EventsHeader setPage={setPage}/>
      <EventsMain/>
      <Footer setPage={setPage}/>
    </>
  );
}

export default Events;