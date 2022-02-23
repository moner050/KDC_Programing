# Javascript 배열과 반복문
<br>

## 배열 (array)
0개 다수의 데이터를 포함할 수 있음
~~~
console.log([1, 2, 3, 4, 5]);
console.log([1, 2, 3, 4, 5][0]);
~~~
<br>

>변수에 대입
~~~
var myNumberArray = [1, 2, 3, 4, 5];
var firstNumber = myNumberArray[0];
var lastNumber = myNumberArray[4];

console.log(myNumberArray);
console.log(firstNumber);
console.log(lastNumber);

var arrayOfTwo = [firstNumber, lastNumber];
console.log(arrayOfTwo);
~~~
<br>

>다른 자료형의 배열
~~~
var generals = ['이순신', '을지문덕', '장보고'];
var onOffs = [true, false];

var multiTypes = [100, true, 'English', [2, 4, 8]];
console.log(multiTypes[3]);
console.log(multiTypes[3][1]);
~~~
---
<br>

## length 속성
배열의 크기를 number로 변환
~~~
console.log(myNumberArray.length);

console.log(['a', 'b', 'c'].length);

console.log(multiTypes.length);

console.log(multiTypes[3].length);
~~~
>마지막 요소 얻기
~~~
var lastInArray = myNumberArray[myNumberArray.length - 1];
console.log(lastInArray);
~~~
---
<br>

## indexOf 함수
특정 값이 배열의 몇 번째 요소인지 반환
>없을 시 -1 반환
~~~
console.log(
  ['apple', 'banana', 'grape', 'orange'].indexOf('grape')
);
console.log(myNumberArray.indexOf(2));

console.log(['apple', 'banana', 'grape', 'orange'].indexOf('mango'));
~~~
---
<br>

## 배열 내 요소 변경
~~~
generals[2] = '김유신';
console.log(generals);
~~~
---
<br>

## push 함수
배열에 요소를 삽입
~~~
var myArray = [];
console.log(myArray);

myArray.push(1);
console.log(myArray);

myArray.push(3);
myArray.push(5);
console.log(myArray);
~~~
---
<br>

## concat 함수
다른 배열을 이어붙인 배열을 반환
~~~
var myArray2 = myArray.concat([2, 4, 8]);
console.log(myArray2);

myArray = myArray.concat(myArray2);
console.log(myArray);
~~~
---
<br>

## splice 함수
#번째 위치로부터 n개의 요소 제거
~~~
myArray.splice(4, 1);
console.log(myArray);

myArray.splice(3, 2);
console.log(myArray);
~~~
---
<br>

## for 문
특정 조건이 성립하는 동안 주어진 작업을 수행
> 형식
> ( 초기화 ; 조건 ; 작업 후 처리 )
~~~
for (var i = 0; i < 5; i++) 
{
  console.log(i);
}

for (var num = 10; num > 0; num -= 2) 
{
  console.log(num);
}
~~~
---
<br>

## 배열을 for 문으로 다루기
~~~
for (var i = 0; i < myNumberArray.length; i++) 
{
  console.log(myNumberArray[i]);
}

for (var i = 0; i < myNumberArray.length; i += 2) 
{
  console.log(myNumberArray[i]);
}
~~~
~~~
var oddArray = [];
var evenArray = [];

for (var i = 10; i <= 20; i++) 
{
  if (i % 2 === 0) 
  {
    evenArray.push(i);
  } 
  else 
  {
    oddArray.push(i);
  }
}

console.log(oddArray);
console.log(evenArray);
~~~
~~~
var cities = ['서울', '대전', '대구', '부산', '울산', '광주'];
var citiesString = '';

for (var i = 0; i < cities.length; i++) 
{
  citiesString += cities[i];
  if (i < cities.length - 1) citiesString += ', ';
}

console.log(citiesString);
~~~
~~~
var longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = longArray.length - 1; longArray.length > 0; i--) 
{
  longArray.splice(i, 1);
  console.log(longArray);
}
~~~
<br>

## break 구문
>for 루프를 중단
~~~
var longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < longArray.length; i++) 
{
  if (longArray[i] === 5) break;
  console.log(longArray[i]);
}
~~~
<br>

## while 문
>조건을 만족하는 동안 반복수행
~~~
var i = 0;
while (i < 5) 
{
    console.log(i);
    i++;
}
~~~
---
<br>

## HTML 요소 생성하여 삽입하기
~~~
<div></div>
~~~
>요소 생성
~~~
var spanElement = document.createElement("span");
~~~
>요소 삽입
~~~
spanElement.append("삽입된 문자열");
document.querySelector("div").append(spanElement);
~~~
<br>

## for 문과 배열 사용하기
~~~
<ul></ul>
<ol></ol>
~~~
~~~
var things = ['냉장고', '코끼리', '기린'];
var steps = 
[
  '냉장고 문을 연다',
  '기린을 꺼낸다',
  '코끼리를 넣는다',
  '냉장고 문을 닫는다'
];

var thingsUl = document.querySelector("ul");
for (var i = 0; i < things.length; i++) 
{
  var li = document.createElement("li");
  li.append(things[i]);
  thingsUl.append(li);
}

var stepsOl = document.querySelector("ol");
for (var i = 0; i < steps.length; i++) 
{
  var li = document.createElement("li");
  li.append(steps[i]);
  stepsOl.append(li);
}
~~~
---
<br>

## 구구단 표 만들어보기
~~~
var tableEl = document.createElement("table");
for (var i = 1; i < 10; i++) 
{
  var trEl = document.createElement("tr");
  for (var j = 1; j < 10; j++) 
  {
    var tdEl = document.createElement("td");
    tdEl.append(i * j);
    trEl.append(tdEl);
  }
  tableEl.append(trEl);
}
document.querySelector("body").append(tableEl);
~~~