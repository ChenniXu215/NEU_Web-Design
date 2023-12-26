import './Header.css';

import GlobalNav from './GlobalNav';

import contactLogo from './images/contact_header.jpg';

function ContactHeader({setPage}) {
    return (
        <header className="header">
            <img
                src={contactLogo}
                className="header__logo"
                alt="A cat sitting in front of the computer and scratching."
                height={150}
                width={150}
            />
            <h1 className="header__title">
            Cats Forum Contact Information
            </h1>
            <GlobalNav className="home_nav" setPage={setPage}/>
        </header>
    );
}

export default ContactHeader;