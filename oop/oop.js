    class AreaCalculator {
        constructor(length, width) {
        this.length = length;
        this.width = width;
        }
    
        calculateArea() {
        return this.length * this.width;
        }
    }
    
    class Form {
        constructor() {
        this.submitButton = document.getElementById('submit');
        this.lengthInput = document.getElementById('length');
        this.widthInput = document.getElementById('width');
        this.areaOutput = document.getElementById('The_area');
        this.areaCalculator = new AreaCalculator();
        this.submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.areaCalculator.length = this.lengthInput.value;
            this.areaCalculator.width = this.widthInput.value;
            this.areaOutput.innerHTML = `The area is ${this.areaCalculator.calculateArea()}`;
        });
        }
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        new Form();
    });
  