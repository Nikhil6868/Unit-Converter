document.addEventListener("DOMContentLoaded", function () {
  const inputTemp = document.getElementById("inputTemp");
  const fromUnit = document.getElementById("fromUnit");
  const toUnit = document.getElementById("toUnit");
  const convertBtn = document.getElementById("convertBtn");
  const resultElement = document.getElementById("result");

  convertBtn.addEventListener("click", function () {
    const inputValue = parseFloat(inputTemp.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (!isNaN(inputValue)) {
      const convertedTemp = convertTemperature(inputValue, from, to);
      resultElement.textContent = `${inputValue.toFixed(2)} ${from} is ${convertedTemp.toFixed(2)} ${to}`;
    } else {
      resultElement.textContent = "Please enter a valid temperature.";
    }
  });

  function convertTemperature(temp, from, to) {
    if (from === "C") {
      if (to === "F") {
        return (temp * 9/5) + 32;
      } else if (to === "K") {
        return temp + 273.15;
      }
    } else if (from === "F") {
      if (to === "C") {
        return (temp - 32) * 5/9;
      } else if (to === "K") {
        return (temp - 32) * 5/9 + 273.15;
      }
    } else if (from === "K") {
      if (to === "C") {
        return temp - 273.15;
      } else if (to === "F") {
        return (temp - 273.15) * 9/5 + 32;
      }
    }
    return temp; // Return unchanged if conversion not needed
  }
});
