'use strict';

const times = [56, 9, 45, 28, 35];

const average = times.reduce((acc, number) => acc + number, 0);

console.log(average);