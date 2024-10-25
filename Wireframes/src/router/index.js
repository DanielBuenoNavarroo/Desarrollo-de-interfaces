import home from '../views/home.js';
import login from '../views/login.js';
import error from '../views/error.js';

const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
];

const root = document.getElementById('root');

const navigateTo = (uri) => {
    const route = routes.find((routeFound) => routeFound.path === uri);

    if (route && route.component) {
        window.history.pushState({}, '', route.path);
        root.innerHTML = '';
        root.appendChild(route.component());
    } else {
        root.innerHTML = '';
        root.appendChild(error())
    }
};

window.onpopstate = () => {
    navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname);

export { navigateTo };