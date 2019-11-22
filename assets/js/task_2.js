
const arr = [];
for (let i=0; i<10;i++) {
    arr.push(getRandomInt(0,100));
}
console.group("Show all elements")
showArr(arr);
console.groupEnd();

console.group("Show all even elements")
evenElements(arr);
console.groupEnd();

console.group("Sum of all elements")
console.log(sumArr(arr));
console.groupEnd();

console.group("Max element from array")
console.log(maxOfArr(arr));
console.groupEnd();

function showArr(arr){
    arr.forEach(item => console.log(item));
}

function evenElements(arr){
    arr.forEach(function(item) {
        if (item % 2 === 0) {
            console.log(item);
        }
    });

}


function sumArr(arr){
    let sum = 0;
    arr.forEach(function(item){
        sum += item;
    });
    return sum;
}


function maxOfArr(arr){
    const arrSort = arr.sort(function(a,b){
       if (a<b) return 1;
       else if (a>b) return -1;
       else return 0;
    });
    return arrSort[0];
}


function pushOnIndex(arr, item, index){
    

}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}