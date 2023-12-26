import './App.css';
import Home from './Home';
import Cats from './Cats';
import Events from './Events';
import Work from './Work';
import Privacy from './Privacy';
import Contact from './Contact';
import Food from './Food';
import Health from './Health';
import Adoption from './Adoption';
import Navbar from './Navbar';

import { useState } from "react";


function App() {
  const [page, setPage] = useState('Home');

  return (
    <div className='app'>
      <Navbar setPage={setPage}/>
      {(page === 'Home') && <Home setPage={setPage}/>}
      {(page === 'Cats') && <Cats setPage={setPage}/>}
      {(page === 'Events') && <Events setPage={setPage}/>}
      {(page === 'Work') && <Work setPage={setPage}/>}
      {(page === 'Privacy') && <Privacy setPage={setPage}/>}
      {(page === 'Contact') && <Contact setPage={setPage}/>}
      {(page === 'Food') && <Food setPage={setPage}/>}
      {(page === 'Health') && <Health setPage={setPage}/>}
      {(page === 'Adoption') && <Adoption setPage={setPage}/>}
    </div>
  );
}

export default App;
