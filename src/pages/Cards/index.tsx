import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { getInitialCards, getRandomCard } from '../../services/api';
import './Cards.css';

export interface IData {
    englishName: string;
    _id: string;
    clowCard: string;
    meaning: string;
}

function Cards() {
    const [cards, setCards] = useState<IData[]>([]);
    const [aditionalCards, setAditionalCards] = useState<number>(0);
    const name = localStorage.getItem('name');

    useEffect(() => {
        getInitialCards().then(values => {
            setCards(values.map(value => value.data.data[0]));
        })
    }, [])


    function addCard() {
        setAditionalCards(aditionalCards + 1);
        getRandomCard().then(value => setCards([...cards, value.data.data[0]]));
    }

    return (
        <div className="cards-container">
            <div className='name-container' >Name: {name}</div>
            <div className='cards'>
                {cards.map((data) => <Card key={data._id} englishName={data.englishName} image={data.clowCard} description={data.meaning} />)}
            </div>
            <div className='button-container'>
                <button className='btn-add-card' onClick={addCard} disabled={aditionalCards >= 3} >
                    <span>Add card</span>
                    <div className="liquid"></div>
                </button>
            </div>
        </div>
    );
}

export default Cards;
