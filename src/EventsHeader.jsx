import './Header.css';

import GlobalNav from './GlobalNav';

import eventsLogo from './images/events_header.jpg';

function EventsHeader({setPage}) {
    return (
        <header className="header">
            <img
                src={eventsLogo}
                className="header__logo"
                alt="A cat is sleeping on the bed covered with a blanket."
                height={150}
                width={150}
            />
            <h1 className="header__title">
            Learn Cats Things and Events
            </h1>
            <GlobalNav className="home_nav" setPage={setPage}/>
        </header>
    );
}

export default EventsHeader;