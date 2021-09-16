let themes = document.querySelector(".theme");
let selection = document.querySelector("#selection");

let selectedTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"

selection.textContent = selectedTheme;
document.body.className = selectedTheme;

Array.from(themes.children).forEach(theme => {
    theme.addEventListener("click", evt => {
        let color = evt.target.dataset.color;
        document.body.className = color;
        selection.textContent = color;
        localStorage.setItem("theme", color)
    })
})


