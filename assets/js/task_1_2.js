const left = Number(prompt("Введите левую грань диапазона:"));
const right = Number(prompt("Введите правую грань диапазона:"));

alert("Открой консоль!");

console.group("Direct order:");
directOrder(left, right);
console.groupEnd();

console.group("Reverse order:");
reverseOrder(left, right);
console.groupEnd();


function directOrder(left, right){
    if (left === right){
        console.log(right);
        return;
    }
    console.log(left++);
    return directOrder(left, right);
}

function reverseOrder(left, right){
    if (right === left){
        console.log(left);
        return;
    }
    console.log(right--);
    return reverseOrder(left, right);
}

