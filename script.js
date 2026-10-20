document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("puzzle");
    const stage = document.getElementById("puzzleImages");

    if (!button || !stage) {
        return;
    }

    const images = Array.from(stage.querySelectorAll("img"));
    let timers = [];

    button.addEventListener("click", () => {
        timers.forEach(window.clearTimeout);
        timers = [];
        images.forEach((image) => image.classList.remove("is-visible"));
        stage.classList.add("is-active");
        button.disabled = true;

        images.forEach((image, index) => {
            timers.push(window.setTimeout(() => {
                image.classList.add("is-visible");
            }, index * 1100 + 30));
            timers.push(window.setTimeout(() => {
                image.classList.remove("is-visible");
            }, (index + 1) * 1100));
        });

        timers.push(window.setTimeout(() => {
            stage.classList.remove("is-active");
            button.disabled = false;
        }, images.length * 1100 + 350));
    });
});
