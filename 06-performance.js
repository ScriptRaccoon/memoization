function memoize(fn) {
    const cache = {};
    return (...args) => {
        if (args.toString() in cache) {
            return cache[args.toString()];
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    };
}

let binomial = (n, k) => {
    if (k < 0 || k > n) return 0;
    if (k == 0 || n == 0) return 1;
    return binomial(n - 1, k - 1) + binomial(n - 1, k);
};

const example = [32, 16];

console.time("computation time without memoization");
const result1 = binomial(...example);
console.log({ result1 });
console.timeEnd("computation time without memoization");

binomial = memoize(binomial);

console.time("computation time with memoization");
const result2 = binomial(...example);
console.log({ result2 });
console.timeEnd("computation time with memoization");
