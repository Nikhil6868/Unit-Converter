document.addEventListener("DOMContentLoaded", function () {
    const inputValue = document.getElementById("inputValue");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const convertBtn = document.getElementById("convertBtn");
    const resultElement = document.getElementById("result");
  
    convertBtn.addEventListener("click", function () {
      const weight = parseFloat(inputValue.value);
      const from = fromUnit.value;
      const to = toUnit.value;
  
      if (!isNaN(weight)) {
        const convertedWeight = convertWeight(weight, from, to);
        resultElement.textContent = `${weight.toFixed(2)} ${from} is ${convertedWeight.toFixed(2)} ${to}`;
      } else {
        resultElement.textContent = "Please enter a valid weight.";
      }
    });
  
    function convertWeight(weight, from, to) {
      const units = {
        kg: 1,
        g: 1000,
        mg: 1000000, 
        lb: 2.20462
      };
      
      const weightInKilograms = weight / units[from];
      const convertedWeight = weightInKilograms * units[to];
      return convertedWeight;
    }
  });
  