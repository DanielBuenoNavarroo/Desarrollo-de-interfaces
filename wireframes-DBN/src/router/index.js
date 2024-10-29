import { routes } from '../lib/data.js';
import error from '../views/error.js';

const app = document.getElementById('app');
const header = document.getElementById('header')

const navigateTo = (uri) => {
    const route = routes.find((routeFound) => routeFound.path === uri);

    if (route && route.component) {
        if(header.classList.contains('hidden')) header.classList.remove('hidden')
        window.history.pushState({}, '', route.path);
        app.innerHTML = '';
        app.appendChild(route.component());
    } else {
        if (!header.classList.contains('hidden')) header.classList.add('hidden')
        app.innerHTML = '';
        app.appendChild(error())
    }
};

window.onpopstate = () => {
    navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname);

export { navigateTo };