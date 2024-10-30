import {routes} from '../lib/data.js';
import error from '../views/error.js';

const app = document.getElementById('app');
const header = document.getElementById('header');

const navigateTo = async (uri) => {
    const route = routes.find((routeFound) => routeFound.path === uri);

    if (route) {
        if (header.classList.contains('hidden')) header.classList.remove('hidden');
        window.history.pushState({}, '', route.path);

        try {
            const module = await route.component();
            app.innerHTML = '';
            app.appendChild(module.default());
        } catch (e) {
            console.error("Error al cargar el componente:", e);
            app.innerHTML = '';
            app.appendChild(error());
        }
    } else {
        if (!header.classList.contains('hidden')) header.classList.add('hidden');
        app.innerHTML = '';
        app.appendChild(error());
    }
};

export {navigateTo};
