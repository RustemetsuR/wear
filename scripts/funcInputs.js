function animateInput() {
    document.querySelectorAll("input").forEach(function (i) {
        i.addEventListener("input", function () {
            if (!i.value.trim().length) {
                i.classList.remove("filled");
            } else {
                i.classList.add("filled");
            }
        });
    });
}

function animateTextarea() {
    document.querySelectorAll("textarea").forEach(function (i) {
        i.addEventListener("input", function () {
            if (!i.value.trim().length) {
                i.classList.remove("filled");
            } else {
                i.classList.add("filled");
            }
        });
    });
}

function animateSelect() {
    if (document.querySelectorAll("select").length === 0) {
        return;
    }
    document.querySelectorAll("select").forEach(function (i) {
        i.addEventListener("click", function () {
            const text = i.options[i.selectedIndex].text;
            if (text.length < 1) {
                i.classList.remove("filled");
            } else {
                i.classList.add("filled");
            }
        });
    });
}

const monthArr = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

function initializeMonthOptions() {
    const monthSelect = document.getElementById("month");
    if (!monthSelect) {
        return;
    }
    monthSelect.innerHTML = "<option selected hidden disabled></option>";
    for (let i = 0; i < monthArr.length; i++) {
        const option = document.createElement("option");
        option.value = monthArr[i];
        option.innerHTML = monthArr[i];
        monthSelect.append(option);
    }
}

animateInput();
animateSelect();
animateTextarea();
initializeMonthOptions();