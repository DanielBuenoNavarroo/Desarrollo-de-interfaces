import './style.css'

import {navigateTo} from './router/index.js'
import {links} from "./lib/data.js";

document.addEventListener('DOMContentLoaded', () => {
    navigateTo(window.location.pathname);
    fillData()
});

const fillData = () => {
    const navList = document.getElementById('nav-list')
    links.map((link) => {
        navList.innerHTML += `<li><a href="${link.uri}">${link.label}</a></li>`
    })
}