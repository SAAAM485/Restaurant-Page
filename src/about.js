import Salt from './images/salt.jpg';

export default function aboutPage() {
    const content = document.querySelector('#content');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const salt = new Image();
    salt.src = Salt;
    salt.classList.add('img');

    div1.textContent = "Don't Miss The Steak!";
    div1.classList.add('divTitle');
    div2.innerText = `Welcome to Prime Cuts Steakhouse, where premium beef meets culinary artistry.
        \nLocated in the city's heart, we offer expertly grilled steaks, from classic ribeye to our signature steak tartare.
        \nEach cut is sourced from top farms and aged to perfection, ensuring a tender, juicy bite.
        \nOur elegant yet cozy ambiance, with rustic decor and soft lighting, creates the perfect setting for any occasion.
        \nComplement your meal with our fine wines and handcrafted cocktails, curated to enhance your dining experience.
        \nJoin us at Prime Cuts Steakhouse for an unforgettable meal.🍽️🥩
        \nFeel free to ask if you need more details! 😊`
    div2.classList.add('div2');
    content.appendChild(salt);
    content.appendChild(div1);
    content.appendChild(div2);
};