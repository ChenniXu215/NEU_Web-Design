import './Header.css';

import GlobalNav from './GlobalNav';

import healthLogo from './images/health_header.jpg';

function HealthHeader({setPage}) {

    return (
        <header className="header">
            <img
                src={healthLogo}
                className="header__logo"
                alt="A yellow and white cat is being shaved."
                height={150}
                width={150}
            />
            <h1 className="header__title">
                Cat Health
            </h1>
            <GlobalNav className="home_nav" setPage={setPage}/>
        </header>
    );
}

export default HealthHeader;