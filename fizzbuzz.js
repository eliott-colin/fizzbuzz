const FIZZ_DIVISOR = 3;
const BUZZ_DIVISOR = 5;
const FIZZ_WORD = "Fizz";
const BUZZ_WORD = "Buzz";
const FIZZBUZZ_WORD = "FizzBuzz";

const isMultiple = v =>
    v % FIZZ_DIVISOR === 0 && v % BUZZ_DIVISOR === 0
        ? FIZZBUZZ_WORD
        : v % FIZZ_DIVISOR === 0
            ? FIZZ_WORD
            : v % BUZZ_DIVISOR === 0
                ? BUZZ_WORD
                : v;

let r = [];

const testNumber = (v) => {
    for (let i = 1; i <= v; i++) {
        const result = isMultiple(i);
        r.push(result);    
    }
};

const process = (v) => {
    testNumber(v);
    console.log(r.join(', '));
    r = [];
};

process(15);