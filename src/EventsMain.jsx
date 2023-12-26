import './EventsMain.css';

import card_CatsLounge from './images/card_CatsLounge.jpg';
import card_LiveWithCats from './images/card_LiveWithCats.jpg';

function EventsMain() {
    return (
        <main className="events__main" id='main-content' tabIndex={-1}>
           <div className="two__panels">
                <div className="panel">
                    <h2 className="panel__title">The Cat lounge</h2>
                    <img src={card_CatsLounge} alt="A cat sit on the table of a lounge."/>
                    <div className="detail__p">
                        <p className="p1">We share cats health, food nutrition, shower, behavior and pregnancy and so on information with all member together.  </p>
                        <p className="p2">Discuss general issues when living with cats, including traveling with cats, moving home, collars and leads, carriers and beds and any grooming issue.  </p>
                        <p className="p3">This is the place for cats to relax and get to know each other. Cats can also do SPA in our lounge.</p>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel__title">Living with Cats</h2>
                    <img src={card_LiveWithCats} alt="A cat walking on the lake shore."/>
                    <div className="detail__p">
                        <p className="p1">Discuss general issues when living with cats, including traveling with cats, moving home, collars and leads, carriers and beds and any grooming issue.</p>
                        <p className="p2">This forum is sharing information of different breeds of cats, therefore you could learn different tips for different breeds of cats.</p>
                        <p className="p3">This workshop will offer the knowledge and skills needed to help feral kittens and stray cats in your community. 
                        You could learn what 's happening about cats in Seattle here!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default EventsMain;