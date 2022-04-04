let howMany = {};
let numberOfCalls = 0;
function binomial(n, k) {
    numberOfCalls++;
    const key = [n, k].toString();
    if (!howMany[key]) howMany[key] = 0;
    howMany[key]++;
    if (k < 0 || k > n) return 0;
    if (k == 0 || n == 0) return 1;
    return binomial(n - 1, k - 1) + binomial(n - 1, k);
}

const result = binomial(10, 4);
console.log({ result });
console.log({ totalCalls });
console.log({ howMany });
