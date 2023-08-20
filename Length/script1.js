document.addEventListener("DOMContentLoaded", function () {
  const inputValue = document.getElementById("inputValue");
  const fromUnit = document.getElementById("fromUnit");
  const toUnit = document.getElementById("toUnit");
  const convertBtn = document.getElementById("convertBtn");
  const resultElement = document.getElementById("result");

  convertBtn.addEventListener("click", function () {
    const length = parseFloat(inputValue.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (!isNaN(length)) {
      const convertedLength = convertLength(length, from, to);
      resultElement.textContent = `${length.toFixed(2)} ${from} is ${convertedLength.toFixed(2)} ${to}`;
    } else {
      resultElement.textContent = "Please enter a valid length.";
    }
  });

  function convertLength(length, from, to) {
    const units = {
      m: 1,
      cm: 100,
      km: 0.001,
      ft: 3.28084,
      in: 39.3701,
      mm: 1000
    };
    
    const lengthInMeters = length / units[from];
    const convertedLength = lengthInMeters * units[to];
    return convertedLength;
  }
});
