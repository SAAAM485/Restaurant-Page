import './style.css';
import WipeContent from './wipe.js';
import HomePage from './home.js';
import MenuPage from './menu.js';
import AboutPage from './about.js';

function changeContent() {
    const homePage = document.querySelector('#home');
    const menuPage = document.querySelector('#menu');
    const aboutPage = document.querySelector('#about');

    homePage.addEventListener('click', () => {
        WipeContent();
        HomePage();
    });
    menuPage.addEventListener('click', () => {
        WipeContent();
        MenuPage();
    });
    aboutPage.addEventListener('click', () => {
        WipeContent();
        AboutPage();
    });
}
HomePage();
changeContent();