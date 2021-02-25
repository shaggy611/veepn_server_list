window.onload = function () {
    let collapseButton = document.querySelector(".js-click-to-collapse");
    let collapseBtn = document.querySelector(".js-click-to-collapse");
    collapseButton.onclick = function () {
        document.querySelector(".js-collapse").classList.toggle("_collapsList");
        collapseBtn.classList.toggle("_pointer-down");
        collapseBtn.textContent = collapseBtn.textContent === "Show more countries" ? "Show less countries" : "Show more countries";
    }
};
