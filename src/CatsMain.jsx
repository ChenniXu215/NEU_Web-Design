import './CatsMain.css';

import React, { useState } from 'react';

import Button from './Button';

import { useRef } from 'react';
import { useId } from 'react';

import card_Persian from './images/card_Persian.jpg';
import card_Ragdoll from './images/card_Ragdoll.jpg';
import card_Siamese from './images/card_Siamese.jpg';
import card_Abyssinian from './images/card_Abyssinian.jpg';
import card_Birman from './images/card_Birman.jpg';
import card_British from './images/card_British.jpg';


function CatsMain({setPage}) {
    const dialogRef = useRef();
    const id = useId();

    const [username, setUsername] = useState('');
    const[greeting, setGreeting] = useState('');
    const [usernameIsMissing, setUsernameIsMissing] = useState(false);

    const [useremail, setUseremail] = useState('');
    const [useremailIsMissing, setUseremailIsMissing] = useState(false);

    function onRegister(name) {
        setGreeting(name);
    }

    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    function cleanForm() {
        setGreeting('');
        setUsernameIsMissing(false);
        setUseremailIsMissing(false);
    }

    function usernameIsValid(name) {
        return !!name;
    }

    function useremailIsValid(email) {
        return !!email;
    }

    return (
        <main className="cats__main" id='main-content' tabIndex={-1}>
            <div className="six__cards">
                <div className="card">
                    <h2 className="card__title">Persian</h2>
                    <img src={card_Persian} alt="A Persian cat lies in a blue and white checkered box." height={200} width={200}/>
                    <p className="first__p">The Persian cat, also known as the Persian longhair, is a long-haired breed of cat characterised by a round face and short muzzle.</p>
                    <div className="other__p">
                        <p>Please <Button className="card__button" onClick={ () => dialogRef.current.showModal()} type="button" visual="link" aria-label="subscribe for Persian">Subscribe</Button> to learn more about cat breeds.</p>
                    </div>
                </div>
                <div className="card">
                    <h2 className="card__title">Ragdoll</h2>
                    <img src={card_Ragdoll} alt="A Ragdoll cat lies on a white sofa." height={200} width={200}/>
                    <p className="first__p">The Ragdoll is a breed of cat with a distinct colorpoint coat and blue eyes. 
                    Its morphology is large and weighty, and it has a semi-long and silky soft coat. American breeder Ann Baker developed Ragdolls in the 1960s. They are best known for their docile, placid temperament and affectionate nature.
                    </p>  
                </div>
                <div className="card">
                    <h2 className="card__title">Siamese</h2>
                    <img src={card_Siamese} alt="A Siamese cat squats on a white table." height={200} width={200}/>
                    <p className="first__p">The Siamese cat (Thai: Maeo Sayam) is one of the first distinctly recognised breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cats native to Thailand 
                    (formerly known as Siam), the original Siamese became one of the most popular breeds in Europe and North America in the 19th century.
                    </p>
                </div>
                <div className="card">
                    <h2 className="card__title">Abyssinian</h2>
                    <img src={card_Abyssinian} alt="An Abyssinian cat lies on a yellow, white and blue patterned sofa." height={200} width={200}/>
                    <p className="first__p">The Abyssinian is a breed of domestic short-haired cat with a distinctive "ticked" tabby coat, in which individual hairs are banded with different colors.</p>
                </div>
                <div className="card">
                    <h2 className="card__title">Birman</h2>
                    <img src={card_Birman} alt="A Birman cat is fed by a person." height={200} width={200}/>
                    <p className="first__p">The Birman is a long-haired, colour-pointed cat distinguished by a silky coat, deep blue eyes, and contrasting white "gloves" on each paw.</p>
                </div>
                <div className="card">
                    <h2 className="card__title">British Shorthair</h2>
                    <img src={card_British} alt="A British Shorthair lies on the carpet sticking out its tongue." height={200} width={200}/>
                    <p className="first__p">The British Shorthair is the pedigreed version of the traditional British domestic cat.</p>
                </div>
            </div>
            <dialog ref={dialogRef} className="model">
                <div>{greeting && <p className='greeting'>Hello {greeting}! Thanks for Joining!</p>}</div>
                <form className="register"
                        onSubmit={ (e) => {
                            e.preventDefault();
                            setUsernameIsMissing(!usernameIsValid(username));
                            setUseremailIsMissing(!useremailIsValid(useremail));
                            if(usernameIsValid && useremailIsValid) {
                                onRegister(username);
                                setUsername('');
                                setUseremail('');
                            }
                        }}
                    >
                    <h3>Subscribe to the Latest Mews!</h3>
                    <div className="user__name">
                        <div className="label__require">
                            <label htmlFor={`${id}-name`}>Name: </label>
                            <p>*Required</p>
                        </div>
                        {usernameIsMissing && <span className='error'>Username is Required</span>}
                        <input id={`${id}-name`}
                            value={username}
                            onInput={ (e) => {
                                setUsername(e.target.value);
                                setUsernameIsMissing(!usernameIsValid(e.target.value));
                            }}
                        />
                    </div>
                    <div className="user__email">
                        <div className="label__require">
                            <label htmlFor={`${id}-email`}>Email: </label>
                            <p>*Required</p>
                        </div>
                        {useremailIsMissing && <span className='error'>Email is Required</span>}
                        <input type="text" id={`${id}-email`}
                            value={useremail}
                            onInput={ (e) => {
                                setUseremail(e.target.value);
                                setUseremailIsMissing(!useremailIsValid(e.target.value));
                            }}
                        />
                    </div>
                    <div className="buttons">
                        <Button className="subscribe__button" type="submit" visual="button" aria-label="submit to register">Register</Button>
                        <Button className="close__button" onClick={ () => {dialogRef.current.close(); cleanForm()}} type="button" visual="button" aria-label="cancel subscribe">Cancel</Button>
                    </div>
                </form>
            </dialog>
        </main>
    );
}

export default CatsMain;