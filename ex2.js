let x;
switch (typeof x) {
    case 'number':
        console.log("x — число");
        break;

    case 'boolean':
        console.log("x - логический тип");
        break;
 
    case 'string':
        console.log("x - строка");
        break;
   
    default:
        console.log("Тип x не определён");
}