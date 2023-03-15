function findFactors(number) {
    const factors = [];
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            factors.push(i);
            if (i !== number / i) {
                factors.push(number / i);
            }
        }
    }
    factors.sort((a, b) => a - b);
    return factors;
}

self.onmessage = event => {
    const number = event.data;
    try {
        const factors = findFactors(number);
        self.postMessage({result: factors});
    } catch (error) {
        self.postMessage({error: error.message});
    }
};
