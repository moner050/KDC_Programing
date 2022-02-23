// 배열
var myNumberArray = [1,2,3,4,5];
var firstNumber = myNumberArray[0];
var lastNumber = myNumberArray[4];

console.log("myNumberArray :", myNumberArray);
console.log("firstNumber :", firstNumber);
console.log("lastNumber :", lastNumber);

var arrayOfTwo = [firstNumber, lastNumber];
console.log("arrayOfTwo :",arrayOfTwo);

// object 자료형 length
var multiTypes = [100, true, 'English', [2, 4, 8]];
console.log("multiTypes : ", multiTypes)
console.log("multiTypes.length :",multiTypes.length)
console.log("multiTypes[3] :",multiTypes[3])
console.log("multiTypes[3].length :",multiTypes[3].length)

// indexOf
var fruitList = ['apple', 'banana', 'grape', 'orange'];
console.log("fruitList :", fruitList);
console.log("fruitList.indexOf('banana') :",fruitList.indexOf('banana'));
// 배열 내 요소 변경
fruitList[0] = 'kiwi';
console.log("fruitList :", fruitList);

// push 함수
var myArray = [];
console.log("myArray :", myArray);
myArray.push(1);
myArray.push(3);
myArray.push(5);
console.log("push myArray :", myArray);

// concat 함수
var myArray2 = myArray.concat([2, 4, 8]);
console.log("concat myArray2 :",myArray2);
myArray = myArray.concat(myArray);
console.log("concat myArray :",myArray);

// splice 함수
myArray.splice(4, 1);
console.log("splice myArray :",myArray);
myArray.splice(2, 3);
console.log("splice myArray :",myArray);