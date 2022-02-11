'use strict';

const isPrime = (a) => {
    if (a === 1) {
        return false;
    } else {
        for (let i = 2; i <= a / 2; i++) {
            if (!(a % i)) {
                return false;
            }
        }
        return true;
    }
}
console.log(isPrime(19));

