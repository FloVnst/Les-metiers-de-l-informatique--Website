window.addEventListener("DOMContentLoaded", () => {
    window.scrollTo({
        top: document.querySelector("h1").offsetTop,
        behavior: 'smooth'
    });
    document.querySelector(".previousCategory").scrollIntoView()
});