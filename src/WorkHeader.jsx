import './Header.css';

import GlobalNav from './GlobalNav';

import workLogo from './images/work_header.jpg';

function WorkHeader({setPage}) {
    return (
        <header className="header">
            <img
                src={workLogo}
                className="header__logo"
                alt="Four cats in the basket."
                height={150}
                width={150}
            />
            <h1 className="header__title">
            We Look Forward to Your Joining Us!
            </h1>
            <GlobalNav className="home_nav" setPage={setPage}/>
        </header>
    );
}

export default WorkHeader;