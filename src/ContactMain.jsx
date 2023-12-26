import Button from './Button';

import './ContactMain.css';

function ContactMain({setPage}) {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    return (
        <main className='contact_main' id='main-content' tabIndex={-1}>
            <h2>Get in touch with us!</h2>
            <p>
            We love hearing from the Cats Forum community and welcome your questions, suggestions, and insights.
            </p>
            <p>
            If you have questions related to cat care, health, or nutrition, please head to the Cats Forum community groups. Browse existing threads or create one of your own to get answers from experts and fellow cat guardians.
            </p>
            <p>
            If you’d like to contact us directly, please use the contact form below or email: xu.chenn@northeastern.edu
            </p>
            <p>
            For inquiries related to the cats events, please visit our <Button onClick={ (e) => go(e, "Events")} type='button' visual='link'>events</Button> page for more information or email us at xu.chenn@northeastern.edu
            </p>
            <h3>Thanks for your interest. We’ll get back to you as soon as possible.</h3>
        </main>
    );
}

export default ContactMain;