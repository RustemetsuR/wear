const category = document.getElementById("category");
const newItems = document.getElementById("new-items");

const level1 = document.getElementById("mobile-nav-level-1");
const level2 = document.getElementById("mobile-nav-level-2");
const level3 = document.getElementById("mobile-nav-level-3");

let currentLevel = 1;

const backToPrevLevel = document.getElementById("back-to-prev-level");
const backToPrevLevel2 = document.getElementById("back-to-prev-level-2");

const closeIcon = document.getElementById("to-prev-history-page");

const changeNavLevel = () => {
    backToPrevLevel.addEventListener("click", function () {
        toPrevPageLevel();
    })
    backToPrevLevel2.addEventListener("click", function () {
        toPrevPageLevel();
    })
    category.addEventListener("click", function () {
        toNextPageLevel();
    });
    newItems.addEventListener("click", function () {
        toNextPageLevel();
    });
}
const changePageLevel = (level) => {
    switch (level) {
        case 1:
            level2.style.display = "none";
            level1.style.display = "block";
            break;
        case 2:
            level1.style.display = "none";
            level2.style.display = "block";
            level3.style.display = "none";
            break;
        case 3:
            level2.style.display = "none";
            level3.style.display = "block";
            break;
        default:
            break;
    }
}
const toNextPageLevel = () => {
    currentLevel++;
    changePageLevel(currentLevel);
}
const toPrevPageLevel = () => {
    currentLevel--;
    changePageLevel(currentLevel);console.log(currentLevel);
}

const toPrevPage = () => {
    closeIcon.addEventListener("click", function () {
        history.back();
    })
}
changeNavLevel();
toPrevPage();