import HomeImg from './images/sign.jpg';

export default function homePage() {
    const content = document.querySelector('#content');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const homeImg = new Image();
    homeImg.src = HomeImg;
    homeImg.classList.add('homeImg');

    div1.textContent = "Don't Miss The Steak!";
    div1.classList.add('homeDiv1');
    div2.textContent = `Welcome to Prime Cuts Steakhouse, where premium beef meets culinary artistry. Located in the city's heart, we offer expertly grilled steaks, from classic ribeye to our signature steak tartare. Each cut is sourced from top farms and aged to perfection, ensuring a tender, juicy bite. Our elegant yet cozy ambiance, with rustic decor and soft lighting, creates the perfect setting for any occasion. Complement your meal with our fine wines and handcrafted cocktails, curated to enhance your dining experience. Join us at Prime Cuts Steakhouse for an unforgettable meal.🍽️🥩 Feel free to ask if you need more details! 😊`
    div2.classList.add('homeDiv2');

    content.appendChild(homeImg);
    content.appendChild(div1);
    content.appendChild(div2);
};