    function calculateArea(length, width) {
        return length * width;
    }
    
    function displayArea() {
        const lengthInput = document.getElementById('length').value;
        const widthInput = document.getElementById('width').value;
        const area = calculateArea(lengthInput, widthInput);
        document.getElementById('The_area').innerHTML = `The area is ${area}`;
    }
    
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        displayArea();
    });