import Button from "./Button";

import './GlobalNav.css';

import { useState } from "react";

const menu = [
    {
      name: "Food",
        path: "/", },
    {
      name: "Health",
      path: "/",
    }, {
        name: "Adoption",
      path: "/",
    },
];

function GlobalNav({ setPage }) {
    const [showMenu, setShowMenu] = useState(false);

    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }
    
    const list = menu.map( item => {
    return (
        <li className="global-nav__item" key={item.name}>
            <a className="global-nav__link" href={item.path} onClick={(e) => go(e, item.name)}>
            {item.name}
            </a> </li>
        ); 
    });

    const showMenuClass = showMenu ? '' : 'global-nav__list--hidden';

    return (
        <nav className={`global-nav`}>
            <Button className="global_btn" onClick={ () => setShowMenu(!showMenu)} type="button" visual="button">≡</Button>
            <ul className={`global-nav__list ${showMenuClass}`}>
                { list }
            </ul>
        </nav>
    ); 
}

  export default GlobalNav;