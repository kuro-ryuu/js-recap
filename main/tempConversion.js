'use strict';

const celsius = Number(prompt('Enter a temperature in Celsius:'));
const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

document.body.innerHTML = `
  <h1>Temperature Conversion</h1>
  <p>Celsius: ${celsius}</p>
  <p>Fahrenheit: ${fahrenheit}</p>
  <p>Kelvin: ${kelvin}</p>
`;
