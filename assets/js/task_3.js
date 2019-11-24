const arr1 = [];
const arr2 = [];

for (let i = 0; i < 10; i++) {
    arr1.push(getRandomInt(0, 100));
}
for (let i = 0; i < 5; i++) {
    arr2.push(getRandomInt(0, 100));
}

console.log(arr1);
console.log(arr2);

console.group("Sum of two array");
console.log(sumArray(arr1, arr2));
console.groupEnd();

console.group("Common of two array");
console.log(commonArray(arr1, arr2));
console.groupEnd();


function sumArray(arr1, arr2) {
    const arrSum = [];
    Array.prototype.push.apply(arrSum, arr1);
    arr2.forEach( item => {
        if (arrSum.includes(item)) {
        } else {
            arrSum.push(item);
        }
    });
    return arrSum;
}


function commonArray(arr1, arr2) {
    const arrComm = [];
    const arrForForeach = (arr1.length > arr2.length) ? arr2 : arr1;
    const arrForCheck = (arr1.length > arr2.length) ? arr1 : arr2;
    arrForForeach.forEach(item => {
        if (arrForCheck.includes(item)) {
            if (!arrComm.includes(item)) {
                arrComm.push(item);
            }
        }
    });
    return arrComm;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}