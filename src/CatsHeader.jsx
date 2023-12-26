import './Header.css';

import GlobalNav from './GlobalNav';

import catsLogo from './images/cats_header.jpg';

function CatsHeader({setPage}) {
    return (
        <header className="header">
            <img
                src={catsLogo}
                className="header__logo"
                alt="A cat wearing a yellow scarf sits on the ground with its mouth open."
                height={150}
                width={150}
            />
            <h1 className="header__title">
            Famous Internet Cats
            </h1>
            <GlobalNav className="home_nav" setPage={setPage}/>
        </header>
    );
}

export default CatsHeader;