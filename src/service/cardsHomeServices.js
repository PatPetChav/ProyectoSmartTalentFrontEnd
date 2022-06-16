
export const getCardsHome = async () => {
    const cards = await fetch("http://127.0.0.1:8000/api/cards-home/")
    const json = await cards.json();
    return json;
}

// async function getCardsHome2(){

// }
