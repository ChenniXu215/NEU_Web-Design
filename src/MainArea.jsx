import './MainArea.css';

function MainArea() {
    return (
        <main className="main" id='main-content' tabIndex={-1}>
            <p className="general_info">This site is a community of cat lovers dedicated to quality cat care and cat welfare related things. 
            We have two main functions here. 
            The first one is that you could search and find cats related information here, which could help you to learn more about cats. 
            The second function of this site is that you can exchange your thoughts and experiences on raising cats with other members.</p>
            <p className="function1">The first function here is searching for cats related information! 
                If you already have cats in your home, you might be interested in 
                cats care like cats food, cats nutrition, cats behavior or even how to have fun with cats here. 
                Also, if you prepare to connect with cats later in your life, you could also learn cats breeds or how to rescue homeless cats in our site. 
                We really hope you could find information you want here!</p>
            <p className="function2">Another thing you could do here is to connect with other menmbers in our cats club. 
                We have different forums to help you to communicate with others about different cats things. For example, you could share your cute cat 's photos and videos with others. 
                Also, you might want to learn experience from other members who are good at taking care of cats!</p>
        </main>
    );
}

export default MainArea;