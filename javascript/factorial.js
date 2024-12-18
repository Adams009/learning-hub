function factorial(n) {
    for (let i = n - 1; i < n ; i--) {
        n *= i;
        if (i === 1) {
            break;
        }
    }
    return n;
}

console.log(factorial(5)); // 120