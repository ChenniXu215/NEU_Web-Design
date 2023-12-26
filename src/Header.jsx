import './Header.css';

import GlobalNav from './GlobalNav';

import headerLogo from './images/home_header.jpg';

function Header({setPage}) {
    return (
        <header className="header">
            <img
                src={headerLogo} 
                className="header__logo"
                alt="Four kittens sit in a basket."
                height={150}
                width={150}
            />
            <h1 className="header__title">
                Cats Power the Internet
            </h1>
            <GlobalNav setPage={setPage}/>
        </header>
    );
}

export default Header;