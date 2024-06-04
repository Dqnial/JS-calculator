const c_button_btn = document.querySelector(".c-button-btn");
const result_content = document.querySelector(".result-content");

function appendToRes(value) {
    result_content.value += value;
}

function clearRes() {
    result_content.value = "";
}

function calcRes() {
    result_content.value = eval(result_content.value);
}