
    class Calculator {
        constructor() {
        this.num1 = 0;
        this.num2 = 0;
        this.method = "Square";
        this.area = 0;
        }
    
        setNum1(value) {
        this.num1 = value;
        }
    
        setNum2(value) {
        this.num2 = value;
        }
    
        setMethod(value) {
        this.method = value;
        }
    
        calculateArea() {
        if (this.method === "Square") {
            this.area = this.num1 * this.num1;
        } else if (this.method === "rectangular") {
            this.area = this.num1 * this.num2;
        } else if (this.method === "triangle") {
            this.area = (this.num1 * this.num2) / 2;
        }
        }
    }
    
    const calculator = new Calculator();
    
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", function() {
        calculator.setNum1(document.getElementById("num1").value);
        calculator.setNum2(document.getElementById("num2").value);
        calculator.setMethod(document.querySelector('input[name="method"]:checked').value);
    
        calculator.calculateArea();
    
        document.querySelector(".answer").innerText = calculator.area;
    });
