//Call stack + Memory Heap
const number = 610; // allocate memory for number
const String = 'some text'; // allocate memory for string
const human = { // allocate memory for an object...and it's values
    first: 'Andrie',
    last: 'Neogie'
}

function subtractTwo(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate()