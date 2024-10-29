import './style.css'

import {navigateTo} from './src/router/index.js'
import header from './src/components/header.js';

document.addEventListener('DOMContentLoaded', () => {
    navigateTo(window.location.pathname);
    header()
});
