import { links } from "../lib/data.js";
import { navigateTo } from "../router/index.js";

const fillLinks = () => {
    return links.map((link) => `<a href="${link.uri}" class="w-full px-4 py-3 rounded-lg ${window.location.pathname}">${link.label}</a>`).join('');
};

const homeClick = () => {
    navigateTo('/')
}

const header = () => {
    const _header = document.getElementById('header');

    _header.innerHTML += 
    `<a href="/" class="w-full text-2xl font-bold uppercase" onclick="${homeClick}">readcorner</a>
    <div class="px-8 py-4">
        <hr class="border-2 rounded-md" />
    </div>
    <nav class="w-full flex flex-col">
        ${fillLinks()}
    </nav>`;
}

export default header;
