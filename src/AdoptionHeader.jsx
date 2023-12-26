import './Header.css';

import GlobalNav from './GlobalNav';

import adoptionLogo from './images/adoption_header.jpg';

function AdoptionHeader({setPage}) {

    return (
        <header className="header">
            <img
                src={adoptionLogo}
                className="header__logo"
                alt="A black and white stray cat."
                height={150}
                width={150}
            />
            <h1 className="header__title">
                Adoption to Help Homeless Cats
            </h1>
            <GlobalNav className="home_nav" setPage={setPage}/>
        </header>
    );
}

export default AdoptionHeader;