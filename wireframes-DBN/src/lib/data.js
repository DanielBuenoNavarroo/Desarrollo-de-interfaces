export const routes = [
    {path: '/', component: () => import('../views/home.js')},
    {path: '/about', component: () => import('../views/about.js')},
    {path: '/login', component: () => import('../views/login.js')},
];

// {label: '', uri: '', icon: ''}
export const links = [
    {
        label: 'Home',
        uri: '/',
        icon: 'bi-house-door'
    },
    {
        label: 'About',
        uri: '/about',
        icon: 'bi-info-circle'
    },
    {
        label: 'Contact',
        uri: '/contact',
        icon: 'bi-envelope'
    }
]