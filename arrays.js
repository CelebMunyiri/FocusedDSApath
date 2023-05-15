'use strict';
//ANALYZING PERFORMANCE OF ARRAYS
//OBJECTIVES
//1.UNDERSTAND HOW ARRAYS WORK
//2.EXPLAIN WHY ADDINGELEMENTS TO THE BEGINNING OF ARRAY IS COSTLY
//3.COMPARE AND CONTRAST RUNTIME FOR ARRAYS AND OBJECTS AS WELL
//4.AS WELL AS BUILT IN METHODS

//OBJECTS
//UNORDERED KEY VALUE PAIRS,
//EXAMPLE
let instructor={
    firstName:'David',
    isInstructor:true,
    favoriteItemNumber:[1,2,3,4],
};
//objects have quick access of elements that is insertion and removal
//Good when you dont need order
//BIG O OF OBJECTS IS AS BELOW
//insertion=0(1)
//removal=0(1)
//Searching=0(N)   this is linear time
//Access=0(1)

//OBJECT METHODS
//Object.keys=0(n)
//Object.values=0(n)
//Object.entries=0(n)
//hasOwnProperty=0(1)

console.log(Object.keys(instructor))// ['firstName','isInstructor','favoriteNumber']
console.log(Object.values(instructor))// ['David','true',[1,2,3,4]]
console.log(Object.entries(instructor))//[['firstName','David'],['isInstructor',true],['favoriteNumbers',[1,2,3,4]]]
console.log(instructor.hasOwnProperty('firstName'))//true

//WHEN ARE ARRAYS SLOW
//Ordered list
let names=['Michael','Melissa','Andrea'];
let values=[true,{},[],2,'awesome'];
//use arrays when you need order
//use arrays when you need fast access /insertion and removal (sort of...)
//INSERTION
names.push('Rajubai')//['Michael','Melissa','Andrea','Rajubai'];
names.pop()//['Michael','Melissa','Andrea']
names.unshift('Munyiri')//['Munyiri','Michael','Melissa',Andrea']
names.shift()//[ 'Michael', 'Melissa', 'Andrea' ]

//push and pop are fast than shift and unshift

//BIG O OF ARRAY OPERATIONS
//.push=0(1)
//.pop=0(1)
//.shift=0(n)
//.unshift=0(n)
//.concat=0(n)
//.slice=0(n)
//.splice=0(n)
//.sort=0(n*log n)
//forEach/map/filter/reduce =0(n)
//names=names.concat([5,6,7]); //[ 'Michael', 'Melissa', 'Andrea', 5, 6, 7 ]

//console.log(names.slice(0,1))// new array [ 'Michael' ]
names.splice(0,1,'Kimsha')//[ 'Kimsha', 'Michael', 'Melissa', 'Andrea' ]






