
const fructs = ["Яблоко","Апельсин", "Банан", "Гранат"];


fructs.sort( function(a,b){
   if (a>b) return 1;
   else if (a<b) return -1;
   else return 0;
});

document.open();
document.write("<ul> ");
fructs.forEach(item =>{
   document.write("<li>" + item + "</li>");
});
document.write("</ul>");
document.close();


console.log(findFruct(fructs, "БАНАН"));


function findFruct(fructs , fruct){
    let index = -1;
    fructs.some(item =>{
        if (item.toLowerCase() === fruct.toLowerCase()){
            index =  fructs.indexOf(item);
        }
    });
    return index;
}