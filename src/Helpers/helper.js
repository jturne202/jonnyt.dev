// Helper funcs

const scrollToByContainerId = id => {
    const element = document.getElementById(`${id}-container`)
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

export {
    scrollToByContainerId
}