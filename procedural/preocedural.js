
var calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var method = document.querySelector('input[name="method"]:checked').value;
    var area = 0;
    
    if (method === "Square") {
        area = num1 * num1;
    } else if (method === "rectangular") {
        area = num1 * num2;
    } else if (method === "triangle") {
        area = (num1 * num2) / 2;
    }
    
    document.querySelector(".answer").innerText = area;
});
