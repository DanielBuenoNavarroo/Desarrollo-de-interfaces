import {navigateTo} from '../router/index.js'

const about = () => {
    document.title = 'About - ReadCorner'
    const section = document.createElement('section');
    const title = document.createElement('h2');

    title.textContent = 'About Page';
    title.classList.add('text-5xl')

    section.appendChild(title);
    return section;
}

export default about;