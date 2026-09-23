'use strict';

const x1 = parseFloat(prompt('x1: '));
const y1 = parseFloat(prompt('y1: '));
const x2 = parseFloat(prompt('x2: '));
const y2 = parseFloat(prompt('y2: '));
const distance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.body.innerHTML = `
    <h1>2D Distance</h1>    
    <p>Position 1: (${x1}, ${y1})</p>
    <p>Position 2: (${x2}, ${y2})</p>
    <p>Distance: ${distance(x1, y1, x2, y2)}</p>
`;
