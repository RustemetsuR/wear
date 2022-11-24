function dropDownText() {
    const blocks = document.getElementsByClassName("help-block__item__title");

    Array.prototype.forEach.call(blocks, function (el) {
       
        el.addEventListener("click", () => {
            el.classList.toggle("clicked");
        });
    });
}

dropDownText();