let input = document.getElementById("input");

let btn = document.getElementById("btn");
btn.addEventListener("click", showTotal);

function showTotal() {

    if (!input.value.trim()) {
        message("error", "Please enter valid number Night");
        return;
    }

    let selected = document.querySelector("#inputs input:checked");
    let result = Number(selected.value);

    let finalTotal = input.value * result;

    message("true",`Total Price:$${finalTotal}`)
}

let total = document.getElementById("total");

function message(type, text) {
    if (type === "error") {
        total.style.color = "#d32f2f";
        total.textContent = text;
    }

    if (type === "true") {
        total.style.color = "";
        total.textContent = text;
    }
}