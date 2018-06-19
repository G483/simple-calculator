import {calculateByOperator} from '../Logic';

it('adds 1 + 2 to equal 3', () => {
    expect(calculateByOperator('+', 1, 2)).toEqual("3");
});

it('subtracts 4 - 2 to equal 2', () => {
    expect(calculateByOperator('-', 4, 2)).toEqual("2");
});

it('adds decimal 1.34 + 5 to equal 6.34', () => {
    expect(calculateByOperator('+', 1.34, 5)).toEqual("6.34");
});

it('subtracts decimal string 1.34 - float 0.34 to equal 1', () => {
    expect(calculateByOperator('-', "1.34", 0.34)).toEqual("1");
});
