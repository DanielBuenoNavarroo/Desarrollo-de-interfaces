import {links} from "../lib/data.js";

const fillLinks = () => {
    return links.map((link) =>
        `<a
            href="${link.uri}"
            class="w-full px-3 py-2 rounded-lg relative ${window.location.pathname === link.uri ? 'bg-violet-800' : 'hover:bg-neutral-800'}">
            <i class="bi ${link.icon} mr-2"></i> ${link.label}
        </a>`).join('')
};

const header = () => {
    const _header = document.getElementById('header');

    _header.innerHTML +=
        `
    <a href="/" id="homeButton" class="w-full flex items-center justify-center text-2xl font-bold uppercase cursor-pointer">
        readcorner
    </a>
    <div class="px-8 py-4">
        <hr class="border rounded-md" />
    </div>
    <nav class="w-full flex flex-col gap-2">
        ${fillLinks()}
    </nav>`;
}

export default header;
