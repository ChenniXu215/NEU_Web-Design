import './Navbar.css';


function Navbar({setPage}) {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }
    
    return (
        <nav className='header__nav'>
            <ul className="submenu">
                <li className="submenu__list"><a href="#" onClick={ (e) => go(e, "Home")}>
                    Home
                </a></li>
                <li className="submenu__list"><a href="#" onClick={ (e) => go(e, "Cats")}>
                    Famous Cats
                </a></li>
                <li className="submenu__list"><a href="#" onClick={ (e) => go(e, "Events")}>
                    Cat Events
                </a></li>
            </ul>
        </nav>
    );
}

export default Navbar;