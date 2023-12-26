import './App.css';

import ContactHeader from './ContactHeader';
import ContactMain from './ContactMain';
import Footer from './Footer';
import SkipLink from './SkipLink';

function Contact({setPage}) {
  return (
    <>
      <SkipLink targetId="main-content"/>
      <ContactHeader setPage={setPage}/>
      <ContactMain setPage={setPage}/>
      <Footer setPage={setPage}/>
    </>
  );
}

export default Contact;