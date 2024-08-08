import Steak from './images/grilling.jpg';
import Risoto from './images/risoto.jpg';
import Drinks from './images/drinks.jpg';

export default function menuPage() {
    const content = document.querySelector('#content');
    const container1 = document.createElement('div');
    const container2 = document.createElement('div');
    const container3 = document.createElement('div');
    const dish1 = document.createElement('div');
    const dish2 = document.createElement('div');
    const dish3 = document.createElement('div');
    const steak = new Image();
    steak.src = Steak;
    steak.classList.add('menuimg');
    const risoto = new Image();
    risoto.src = Risoto;
    risoto.classList.add('menuimg');
    const drinks = new Image();
    drinks.src = Drinks;
    drinks.classList.add('menuimg');
    
    container1.classList.add('container');
    container2.classList.add('container');
    container3.classList.add('container');

    dish1.classList.add('dish');
    dish1.textContent = 'Dry Aged Ribeye Steak 12oz - $80';
    dish2.classList.add('dish');
    dish2.textContent = 'Foie Gras Truffle Risotto - $30';
    dish3.classList.add('dish');
    dish3.textContent = 'Handcrafted Cocktail - $10'


    container1.appendChild(steak);
    container1.appendChild(dish1);
    container2.appendChild(risoto);
    container2.appendChild(dish2);
    container3.appendChild(drinks);
    container3.appendChild(dish3);
    content.appendChild(container1);
    content.appendChild(container2);
    content.appendChild(container3);
};