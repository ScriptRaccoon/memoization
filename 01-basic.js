function binomial(n, k) {
    if (k < 0 || k > n) return 0;
    if (k == 0 || n == 0) return 1;
    return binomial(n - 1, k - 1) + binomial(n - 1, k);
}

const result = binomial(10, 4);
console.log({ result });
