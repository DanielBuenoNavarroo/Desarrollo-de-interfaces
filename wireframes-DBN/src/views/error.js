const error = () => {
    const div = document.createElement('div')
    div.innerHTML += 
    `<h2 
        class="text-5xl">
        This page does not exists, return to 
        <a 
            href="/" 
            class="underline hover:text-blue-100">
            home
        </a>
    </h2>`
    return div;
}

export default error;