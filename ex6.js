let array = [2, 2, 2];
let result = true;
for (let i = 0; i < array.length - 1; i++){ 
   if(array[i] !== array[i + 1]) {
    result = false;
   }
}
console.log(result);