document.addEventListener("DOMContentLoaded", function () {
    const inputValue = document.getElementById("inputValue");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const convertBtn = document.getElementById("convertBtn");
    const resultElement = document.getElementById("result");
  
    convertBtn.addEventListener("click", function () {
      const time = parseFloat(inputValue.value);
      const from = fromUnit.value;
      const to = toUnit.value;
  
      if (!isNaN(time)) {
        const convertedTime = convertTime(time, from, to);
        resultElement.textContent = `${time.toFixed(2)} ${from} is ${convertedTime.toFixed(2)} ${to}`;
      } else {
        resultElement.textContent = "Please enter a valid time.";
      }
    });
  
    function convertTime(time, from, to) {
      const units = {
        sec: 1,
        min: 60,
        hr: 3600
      };
      
      const timeInSeconds = time * units[from];
      const convertedTime = timeInSeconds / units[to];
      return convertedTime;
    }
  });
  