import './style.css'

import {navigateTo} from './src/router/index.js'
import header from './src/components/header.js';

document.addEventListener('DOMContentLoaded', () => {
    header()
    let promise = navigateTo(window.location.pathname);
});
