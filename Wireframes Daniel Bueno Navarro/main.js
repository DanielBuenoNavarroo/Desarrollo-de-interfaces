import { navigateTo } from './src/router/index.js'

document.addEventListener('DOMContentLoaded', () => {
    navigateTo('/');
    const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "dark"); //dark , light
    if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme)
    const targetTheme = "dark";
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
});