


const num = String(prompt("Введите число:"));


alert(reverseNum(num));


function reverseNum(num){
    return reverseNumSkeleton(num, num.length);
}


function reverseNumSkeleton(num, index){
    const rezult = num[--index].toString();
    if (index === 0) return rezult;
    const str = rezult  + reverseNumSkeleton(num, index);
    return str;
}