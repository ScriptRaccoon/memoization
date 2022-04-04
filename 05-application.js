function memoize(fn) {
    const cache = {};
    return (...args) => {
        if (args.toString() in cache) {
            console.log("use cache for", ...args);
            return cache[args.toString()];
        }
        console.log("compute for", ...args);
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    };
}

let numberOfCalls = 0;

let binomial = (n, k) => {
    numberOfCalls++;
    if (k < 0 || k > n) return 0;
    if (k == 0 || n == 0) return 1;
    return binomial(n - 1, k - 1) + binomial(n - 1, k);
};

binomial = memoize(binomial);

const result = binomial(10, 4);
console.log({ numberOfCalls });
console.log({ result });
