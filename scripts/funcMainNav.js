const elements = document.getElementsByClassName("main-nav__catalog__nav__element");
const modalNav = document.getElementById("modal-nav");

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter" || e.keyCode === 13){
        console.log('asd')
        event.preventDefault();
        window.location.href = "../pages/search_results_page.html";
    }
})

Array.prototype.forEach.call(elements, function (el) {
    el.addEventListener("mouseover", function () {
        if(modalNav.style.opacity === "0"){
            modalNav.style.opacity = "1";
            modalNav.style.visibility = "visible";
        }else{
            modalNav.style.opacity = "0";
            modalNav.style.visibility = "hidden";
        }
    });
});

