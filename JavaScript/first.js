let n = prompt("Enter a Number : ");

let arr = [];

for (let i = 0; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

let fac = arr.reduce((res, curr) => {
    return res * curr;
});

console.log(fac);