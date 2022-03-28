import axios from "axios";

const MAX = 55;
const INITIAL_CARDS = 5;

const api = axios.create({
    baseURL: "https://protected-taiga-89091.herokuapp.com/api/card",
});

const getRandomNumber = () => Math.floor(Math.random() * MAX) + 1;

export const getInitialCards = () => {
    let count = 0
    let fetchArr = [];

    while (fetchArr.length < INITIAL_CARDS) {
        let randomNumber = getRandomNumber();
        const isUnique = fetchArr.indexOf(randomNumber) === -1;

        if (isUnique) {
            fetchArr.push(randomNumber);
        };
    }

    localStorage.setItem('keys',JSON.stringify(fetchArr));

    return Promise.all(fetchArr.map(number => api.get('', { params: { pageSize: 1, page: number } })))
}
export const getRandomCard = () => {
    const storedArray = localStorage.getItem("keys");
    const keys = JSON.parse(storedArray || '');
    let randomNumber = getRandomNumber();

    while (keys.includes(randomNumber)) {
        randomNumber = getRandomNumber();
    }

    return api.get('', { params: { pageSize: 1, page: randomNumber } })
}