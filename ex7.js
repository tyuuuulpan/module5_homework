const arr = [1, 8, 2, 4, 0, 12, 7,];
let even = 0;
let odd = 0;
let zero = 0;
function getEvenOdd() {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] === 0) {
                zero++;
            } else if (arr[i]%2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }
    return `zero ${zero}; even ${even}; odd ${odd};`
}
console.log(getEvenOdd())