    function getInputValues() {
        const num1 = document.getElementById("num1").value;
        const num2 = document.getElementById("num2").value;
        const method = document.querySelector('input[name="method"]:checked').value;
    
        return { num1, num2, method };
    }
    
    function calculateArea({ num1, num2, method }) {
        let area = 0;
    
        if (method === "Square") {
        area = num1 * num1;
        } else if (method === "rectangular") {
        area = num1 * num2;
        } else if (method === "triangle") {
        area = (num1 * num2) / 2;
        }
    
        return area;
    }
    
    function updateAnswer(area) {
        document.querySelector(".answer").innerText = area;
    }
    
    function handleClick() {
        const inputValues = getInputValues();
        const area = calculateArea(inputValues);
        updateAnswer(area);
    }
    
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", handleClick);
