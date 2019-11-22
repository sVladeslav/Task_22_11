




function factorial(n){
    if (n<2){
        return 1;
    }
    return factorial(n-1) * n;
}

const num = prompt("Введите ваше число для возведения его в факториал.");

if (isNaN(num)) alert("NaN");
else alert(num + "! = " + factorial(Number(num)));