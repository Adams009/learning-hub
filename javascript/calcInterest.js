function calcInterest(principal, rate, time) {
    return ((principal * rate * time) / 100);
}

console.log(calcInterest(1000, 5, 2)); // 100