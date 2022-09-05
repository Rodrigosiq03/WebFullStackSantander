var current_number = 0;
var current_number_wrapper = document.getElementById("current-number");

function increment() {
    current_number = current_number + 1;
    current_number_wrapper.innerHTML = current_number;
}

function decrement() {
    current_number = current_number - 1;
    current_number_wrapper.innerHTML = current_number;

}

function change_color() {
    if (current_number_wrapper.innerHTML >= 0) {
        current_number_wrapper.style.color('green');
    } else {
        current_number_wrapper.style.color('red');
    }
}








