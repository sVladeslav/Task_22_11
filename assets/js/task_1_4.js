

const num = Number(prompt("Введите число:"));


alert("Сумма цифр числа = " + sum(num));


function sum(num){

    if (num/10 === 0 ) return 0;

    return num%10 + sum(parseInt(num/10));
}