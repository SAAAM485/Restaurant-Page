export default function wipeContent() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
};