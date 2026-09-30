const isMultiple = v =>
    v % 3 === 0 && v % 5 === 0
        ? "FizzBuzz"
        : v % 3 === 0
            ? "Fizz"
            : v % 5 === 0
                ? "Buzz"
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