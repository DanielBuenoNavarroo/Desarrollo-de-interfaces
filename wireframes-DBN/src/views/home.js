import { navigateTo } from '../router/index.js'

const home = () => {
    const section = document.createElement('section');
    const title = document.createElement('h2');

    title.textContent = 'Welcome Page';
    title.classList.add('text-5xl')

    section.appendChild(title);
    return section;
}

export default home;