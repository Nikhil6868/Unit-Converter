document.addEventListener("DOMContentLoaded", function () {
    const inputValue = document.getElementById("inputValue");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const convertBtn = document.getElementById("convertBtn");
    const resultElement = document.getElementById("result");
  
    convertBtn.addEventListener("click", function () {
      const area = parseFloat(inputValue.value);
      const from = fromUnit.value;
      const to = toUnit.value;
  
      if (!isNaN(area)) {
        const convertedArea = convertArea(area, from, to);
        resultElement.textContent = `${area.toFixed(2)} ${from} is ${convertedArea.toFixed(2)} ${to}`;
      } else {
        resultElement.textContent = "Please enter a valid area.";
      }
    });
  
    function convertArea(area, from, to) {
      const units = {
        sqm: 1,
        sqcm: 10000,
        sqft: 10.7639,
        sqin: 1550.0031,
        sqkm: 0.000001
      };
      
      const areaInSqMeters = area / units[from];
      const convertedArea = areaInSqMeters * units[to];
      return convertedArea;
    }
  });
  