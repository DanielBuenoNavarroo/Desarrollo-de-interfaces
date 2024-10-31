import carrousel from "../components/home/carrousel";

const home = () => {
    document.title = 'Home - ReadCorner'
    const section = document.createElement('section');
    section.className = "w-full h-full"
    section.appendChild(carrousel())
    const title = document.createElement('h2');

    title.textContent = 'Welcome Page';
    title.classList.add('text-5xl')

    section.appendChild(title);
    return section;
}

export default home;