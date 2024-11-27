window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi);
};

document.querySelector('#reset').addEventListener('click', () => {
    document.querySelector('#height').value = '';
    document.querySelector('#weight').value = '';
    result.innerText = '';
});


function calculateBmi() {
    const height = parseFloat(document.querySelector('#height').value.trim());
    const weight = parseFloat(document.querySelector('#weight').value.trim());
    const result = document.querySelector('#result');

  
    result.style.color = '';

    
    if (!height || isNaN(height) || height <= 0) {
        result.innerText = "Please provide a valid height in cm.";
        result.style.color = "#FFC107";
        return;
    }

    if (!weight || isNaN(weight) || weight <= 0) {
        result.innerText = "Please provide a valid weight in kg.";
        result.style.color = "#FFC107"; 
        return;
    }

   
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    
    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}`;
        result.style.color = "#FFC107"; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
        result.style.color = "#4CAF50"; 
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Over Weight: ${bmi}`;
        result.style.color = "#FF5722"; 
    } else if (bmi >= 30) {
        result.innerText = `Obese: ${bmi}`;
        result.style.color = "#F44336"; 
    }
}


