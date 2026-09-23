const sides = [
  Number(prompt('Side 1:')),
  Number(prompt('Side 2:')),
  Number(prompt('Side 3:')),
];

const result = document.createElement('p');

if (!sides.every((side) => Number.isFinite(side) && side > 0)) {
  result.textContent = 'Please enter three positive side lengths.';
} else if (sides[0] === sides[1] && sides[1] === sides[2]) {
  result.textContent = 'The triangle is equilateral.';
} else if (
  sides[0] === sides[1] ||
  sides[0] === sides[2] ||
  sides[1] === sides[2]
) {
  result.textContent = 'The triangle is isosceles.';
} else {
  result.textContent = 'The triangle is scalene.';
}

document.body.append(result);
