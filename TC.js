 function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
     const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
    
     let convertedTemp;
    
    if (fromUnit === 'celsius') {
       if (toUnit === 'fahrenheit') {
         convertedTemp = (inputTemp * 9/5) + 32;
       } else if (toUnit === 'kelvin') {
         convertedTemp = inputTemp + 273.15;
    } else {
         convertedTemp = inputTemp;
       }
     } else if (fromUnit === 'fahrenheit') {
       if (toUnit === 'celsius') {
         convertedTemp = (inputTemp - 32) * 5/9;
       } else if (toUnit === 'kelvin') {
         convertedTemp = (inputTemp - 32) * 5/9 + 273.15;
       } else {
         convertedTemp = inputTemp;
       }
     } else if (fromUnit === 'kelvin') {
       if (toUnit === 'celsius') {
         convertedTemp = inputTemp - 273.15;
       } else if (toUnit === 'fahrenheit') {
         convertedTemp = (inputTemp - 273.15) * 9/5 + 32;
       } else {
         convertedTemp = inputTemp;
       }
     }
    
     document.getElementById('result').textContent = `Converted temperature: ${convertedTemp.toFixed(2)} ${toUnit}`;
   }

