import home from '../views/home.js';
import login from '../views/login.js';

export const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
];

// {label: '', uri: '', icon: ''}
export const links = [
    {
        label: 'Home',
        uri: '/',
        icon: ''
    },
    {
        label: 'About',
        uri: '/about',
        icon: ''
    },
    {
        label: 'Contact',
        uri: '/contact',
        icon: ''
    }
]