const score = Number(prompt('Enter your assessment score:'));
const result = document.createElement('p');

if (!Number.isFinite(score) || score < 0 || score > 100) {
  result.textContent = 'Enter a score between 0 and 100.';
} else if (score <= 39) {
  result.textContent = 'Your grade is 0.';
} else if (score <= 51) {
  result.textContent = 'Your grade is 1.';
} else if (score <= 63) {
  result.textContent = 'Your grade is 2.';
} else if (score <= 75) {
  result.textContent = 'Your grade is 3.';
} else if (score <= 87) {
  result.textContent = 'Your grade is 4.';
} else {
  result.textContent = 'Your grade is 5.';
}

document.body.append(result);
