export const redirect = (url) => {
    window.history.pushState({}, '', url);
}
