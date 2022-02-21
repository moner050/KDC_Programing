// 변수 선언 없이 값 바꾸기
// document.querySelector("h1").innerHTML = "자료형과 변수";

// document.querySelector("#typesTest").innerHTML = "안녕하세요";
// document.querySelector("#typesTest").innerHTML = 100;

// 변수 선언하여 값 바꾸기
var salutation = "안녕하세요, 반갑습니다!";
var typesTestDiv = document.querySelector("#typesTest");

typesTestDiv.innerHTML = salutation;

// 변수 선언 후 값 바꿔주기
var myNumber = 1;
console.log(myNumber);

myNumber = 3;
console.log(myNumber);

myNumber = myNumber + 2;
console.log(myNumber);

// 증/감 연산자
myNumber++;
console.log(myNumber);

myNumber--;
console.log(myNumber);

// +=, -=, *=, /=, %= 연산
myNumber += 3;
console.log(myNumber);

myNumber -= 5;
console.log(myNumber);

myNumber *= 6;
console.log(myNumber);

myNumber /= 2;
console.log(myNumber);

myNumber %= 4;
console.log(myNumber);

// 문자열은 += 가능하다
var myName = '홍';
console.log(myName);

myName += '길동';
console.log(myName);