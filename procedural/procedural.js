
document.getElementById('submit').addEventListener("click", function(event){
    event.preventDefault();
    var lengthInput = document.getElementById('length').value;
    
    var widthInput = document.getElementById('width').value;

    var area = lengthInput * widthInput 

    document.getElementById('The_area').innerHTML = `The area is ${area}`;


    })