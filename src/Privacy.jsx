import './App.css';
import PrivacyHeader from './PrivacyHeader';
import PrivacyMain from './PrivacyMain';
import Footer from './Footer';
import SkipLink from './SkipLink';

function Privacy({setPage}) {
  return (
    <>
      <SkipLink targetId="main-content"/>
      <PrivacyHeader setPage={setPage}/>
      <PrivacyMain/>
      <Footer setPage={setPage}/>
    </>
  );
}

export default Privacy;
