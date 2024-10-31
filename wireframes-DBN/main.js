import './style.css'

import {navigateTo} from './src/router/index.js'
import header from './src/components/header.js';

document.addEventListener('DOMContentLoaded', () => {
    header()
    navigateTo(window.location.pathname);
});
