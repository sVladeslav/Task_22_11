


const num = Number(prompt("Введите число вложеных скобок:"));


alert (bracket(num));


function bracket(num){
    if (--num===0) return "()";
    return "(" +  bracket(num) + ")";
}