import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getInitialCards, getRandomCard } from '../../services/api';
import './Cards.css';

export interface IData {
    englishName: string;
    _id: string;
    clowCard: string;
    meaning: string;
    value: number;
}

function Cards() {
    const [cards, setCards] = useState<IData[]>([]);
    const [aditionalCards, setAditionalCards] = useState<number>(0);
    const name = localStorage.getItem('name');

    const MAX_VALUE = 10;

    useEffect(() => {
        getInitialCards().then(values => {
            setCards(values.map(value => ({ ...value.data.data[0], value: Math.floor(Math.random() * MAX_VALUE) + 1 })));
        })
    }, [])

    function addCard() {
        setAditionalCards(aditionalCards + 1);
        getRandomCard().then(value => setCards([...cards, { ...value.data.data[0], value: Math.floor(Math.random() * MAX_VALUE) + 1 }]));
    }

    function shuffleCards() {
        let currentIndex = cards.length, randomIndex;
        let _cards = cards

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [_cards[currentIndex], _cards[randomIndex]] = [
                cards[randomIndex], cards[currentIndex]];
        }

        setCards([..._cards]);
    }

    return (
        <div className="cards-container">
            <div className='name-container' >Name: {name}</div>
            <div className='cards'>
                {cards.map((data) => <Card key={data._id} englishName={data.englishName} image={data.clowCard} description={data.meaning} value={data.value} />)}
            </div>
            <div className='button-container'>
                <button className='btn-add-card' onClick={shuffleCards} >
                    <span>shuffle</span>
                    <div className="liquid"></div>
                </button>
                <button className='btn-add-card' onClick={addCard} disabled={aditionalCards >= 3} >
                    <span>Add card</span>
                    <div className="liquid"></div>
                </button>
            </div>
        </div>
    );
}

export default Cards;
