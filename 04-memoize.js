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

let addTen = memoize((x) => x + 10);
const result1 = addTen(0);
const result2 = addTen(0);
console.log({ result1 });
console.log({ result2 });
