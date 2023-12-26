import './Header.css';

import GlobalNav from './GlobalNav';

import foodLogo from './images/food_header.jpg';

function FoodHeader({setPage}) {

    return (
        <header className="header">
            <img
                src={foodLogo}
                className="header__logo"
                alt="A cat is eating."
                height={150}
                width={150}
            />
            <h1 className="header__title">
                Cat Food and Feeding
            </h1>
            <GlobalNav className="home_nav" setPage={setPage}/>
        </header>
    );
}

export default FoodHeader;