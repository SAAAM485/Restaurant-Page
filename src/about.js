export default function aboutPage() {
    const content = document.querySelector('#content');
    const div1 = document.createElement('div');

    div1.textContent = 'about';
    content.appendChild(div1);
};