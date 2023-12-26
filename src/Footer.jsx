import './footer.css';


function Footer({setPage}) {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    return (
        <footer className="footer">
            <nav className="footer__menu">
                 <li className="footer__list"><a href="#" onClick={ (e) => go(e, "Privacy")}>
                    Privacy Policy
                </a></li>
                <li className="footer__list"><a href="#" onClick={ (e) => go(e, "Work")}>
                    Work for Us
                </a></li>
                <li className="footer__list"><a href="#" onClick={ (e) => go(e, "Contact")}>
                    Contact Us
                </a></li>
            </nav>
        </footer>
    );
}

export default Footer;