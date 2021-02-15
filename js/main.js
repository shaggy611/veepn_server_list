window.onload = function () {
    let collapseButton = document.querySelector(".js-click-to-collapse");

    collapseButton.onclick = function () {
        let collapsElemClassList = document.querySelector(".js-collapse").classList;
        if (collapsElemClassList == "_bg-light-blue-bradius js-collapse") {
            collapsElemClassList.add("_collapsList");
        }
        else {
            collapsElemClassList.remove("_collapsList");
        }
    }
};
