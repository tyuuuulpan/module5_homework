let myMap = new Map();
myMap.set(1, 'user9');
myMap.set(2, 'user8');
myMap.set(3, 'user7');
myMap.set(4, 'user6');


for (let keyProp of myMap)
 {  console.log(`ключ - ${keyProp[0]}, значение - ${keyProp[1]}`);
 }