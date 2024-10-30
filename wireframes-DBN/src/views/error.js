const error = () => {
    document.title = '404 - ReadCorner'
    const div = document.createElement('div')
    div.innerHTML +=
        `<h2 class="text-5xl">
            This page does not exists, return to the
            <a href="/" class="underline">
                Home Page
            </a>
        </h2>`
    return div;
}

export default error;