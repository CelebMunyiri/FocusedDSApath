//HASHMAP
//A map is a key value pair
let map={}
map['key1']=20;
console.log(map['key1'])
map['key2']=10;
map['key3']=30;

//find if a key exist returns a boolean
console.log('key3' in map)//logs true
//delete a key and its value
delete map['key3'];
console.log( 'key3' in map)//logs false

//Hashmaps are mostly used in situations such as counting occurrences of elements in an array
//Example:


//This problem uses both hashmap and array
