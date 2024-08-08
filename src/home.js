import HomeImg from './images/sign.jpg';

export default function homePage() {
    const content = document.querySelector('#content');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const homeImg = new Image();
    homeImg.src = HomeImg;
    homeImg.classList.add('img');

    div1.textContent = "Reservation Info";
    div1.classList.add('divTitle');
    div2.textContent = 'Phone - 0912345678';
    div2.classList.add('div2');
    div3.textContent = 'FG6X+VMX, Road, Kiti, Uganda';
    div3.classList.add('div3');

    content.appendChild(homeImg);
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
};