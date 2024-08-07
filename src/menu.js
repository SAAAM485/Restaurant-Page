export default function menuPage() {
    const content = document.querySelector('#content');
    const div1 = document.createElement('div');

    div1.textContent = 'menu';
    content.appendChild(div1);
};