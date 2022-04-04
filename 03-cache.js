let cache = {};
let numberOfCalls = 0;
function binomial(n, k) {
    numberOfCalls++;
    const key = [n, k].toString();
    if (key in cache) return cache[key];
    let result;
    if (k < 0 || k > n) {
        result = 0;
    } else if (k == 0 || n == 0) {
        result = 1;
    } else {
        result = binomial(n - 1, k - 1) + binomial(n - 1, k);
    }
    cache[key] = result;
    return result;
}

const result = binomial(10, 4);
console.log({ result });
console.log({ numberOfCalls });
console.log({ cache });
