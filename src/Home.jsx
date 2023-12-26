import './App.css';
import Header from './Header';
import MainArea from './MainArea'
import Footer from './Footer';
import SkipLink from './SkipLink';

function Home({setPage}) {
  return (
    <>
      <SkipLink targetId="main-content"/>
      <Header setPage={setPage}/>
      <MainArea/>
      <Footer setPage={setPage}/>
    </>
  );
}

export default Home;
