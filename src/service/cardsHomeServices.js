import { URL_BACKEND } from '../environments/environments'

export const getCardsHome = async () => {
    const cards = await fetch(URL_BACKEND + "/cards-home/")
    const json = await cards.json();
    return json;
}

// async function getCardsHome2(){

// }
