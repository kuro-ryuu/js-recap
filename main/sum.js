const number = Number(prompt('Enter a positive integer:'));
const result = document.createElement('p');

if (!Number.isInteger(number) || number <= 0) {
  result.textContent = 'Please enter a positive integer.';
} else {
  let sum = 0;

  for (let current = 1; current <= number; current += 1) {
    sum += current;
  }

  result.textContent = `The sum from 1 to ${number} is ${sum}.`;
}

document.body.append(result);
