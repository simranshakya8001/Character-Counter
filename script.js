let inp = document.querySelector("input");
let span = document.querySelector("span");
inp.addEventListener("input", function() {

    span.textContent = 20 - inp.value.length;
    let left = 20 - inp.value.length;
    if (left < 0) {

        span.style.color = "red";
    } else {

        span.style.color = "black";

    }

})