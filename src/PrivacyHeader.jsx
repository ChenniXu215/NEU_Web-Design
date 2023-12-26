import './Header.css';

import GlobalNav from './GlobalNav';

import privacyLogo from './images/privacy_header.jpg';

function PrivacyHeader({setPage}) {

    return (
        <header className="header">
            <img
                src={privacyLogo}
                className="header__logo"
                alt="A cat wearing sunglasses."
                height={150}
                width={150}
            />
            <h1 className="header__title">
                Privacy Policy
            </h1>
            <GlobalNav className="home_nav" setPage={setPage}/>
        </header>
    );
}

export default PrivacyHeader;