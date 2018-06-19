import Big from 'big.js';

export function calculateByOperator(operator, a, b) {
    a = new Big(a);
    b = new Big(b);

    if (operator === '+') {
        return a.plus(b).toString();
    }

    if (operator === '-') {
        return a.minus(b).toString();
    }

    return console.log('Unrecognized operator: ' + operator);
}
