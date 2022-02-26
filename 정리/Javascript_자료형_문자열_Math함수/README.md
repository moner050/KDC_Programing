# 자료형 더 자세히 알아보기
## 문자열 (string)

### 문자열 길이 구하기
> length 속성
~~~
var myString = "동해물과 백두산이 마르고 닳도록";
console.log(myString.length);
~~~
<br>

### n번째 글자
~~~
var myLetter = "자바스크립트"[3];
console.log(myLetter);

// 바꿔넣기는 동작하지 않음
var myString = "서울소곱창";
myString[3] = "막";
console.log(myString);
~~~
> for 문을 사용해서 n번째 글자 바꿔보기
~~~

~~~
<br>

### 글자 수로 자르기
> slice 함수
~~~
var myString = "0123456789";

console.log(myString.slice(3));
console.log(myString.slice(-3));
console.log(myString.slice(4, 8));
console.log(myString.slice(0, -3));
~~~
<br>

### 문자열 일부 치환
> replace 함수
~~~
var myString = "저는 서울에 살고 있는 서울 시민입니다.";
myString.replace("서울", "부산");
console.log(myString);
~~~
<br>

### 문자열 내 다른 문자열 위치
> indexOf 함수
~~~
var myString = "한겨울에 밀짚모자 꼬마 눈사람";
console.log(myString.indexOf("꼬마"));
console.log(myString.indexOf("산타"));
~~~
<br>

### 특정 문자 기준으로 배열로 분할
> split 함수
~~~
var myString = "010-1234-5678";
console.log(myString.split("-"));
~~~
<br>

### 전체 대문자, 소문자 변환
> toUpperCase, toLowerCase 함수
~~~
var myString = "Merry Christmas!";
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
~~~
<br>

### 공백 없에기
> trim 함수
~~~
var myString = " 하나 ";
console.log(myString.length);
console.log(myString.trim().length);
~~~
---
<br>

## 숫자 (number)
### 문자열을 숫자로 바꾸기
~~~
var numStr = "10";
console.log(typeof numStr);
console.log(numStr + 5);

var numCast = Number(numStr);
console.log(typeof numCast);
console.log(numCast + 5);
~~~
<br>

## 숫자로 바꿀 수 있는 문자열일 때
Number로 형 변환 시도시 NaN 반환  
Number.isNaN으로 형 변환 실패 여부 확인  
~~~
var num1 = Number('114');
var num2 = Number('24B');

console.log(num1);
console.log(num2);

console.log(Number.isNaN(num1));
console.log(Number.isNaN(num2));
~~~
---
<br>

## Math 객체를 사용한 기능들
### 절대값 구하기
> Math의 abs 함수
~~~
var absNum = Math.abs(-1);
console.log(absNum);

function getDifference(num1, num2) {
  return Math.abs(num1 - num2);
}

console.log(getDifference(4, 9));
console.log(getDifference(9, 4));
~~~
<br>

### 내림, 올림, 반올림
> Math의 floor, ceil, round 함수
~~~
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));
console.log(Math.round(2.4));

console.log(Math.ceil(2.7));
console.log(Math.floor(2.7));
console.log(Math.round(2.7));
~~~
<br>

### 제곱 구하기
> Math의 pow 함수
~~~
console.log(Math.pow(2, 3));
~~~
---
<br>

## 배열 (array)
### 정렬
> sort 함수 사용
~~~
var array = [3, 1, 4, 2, 8, 0, 9];

array.sort(function (a, b) {
  return a > b ? 1 : -1;
});
console.log(array);

array.sort(function (a, b) {
  return a < b ? 1 : -1;
});
console.log(array);
~~~
~~~
var array = ["melon", "banana", "kiwi", "apple", "orange", "grape"];

array.sort(function (a, b) {
  return a > b ? 1 : -1;
});
console.log(array);

array.sort(function (a, b) {
  return a < b ? 1 : -1;
});
console.log(array);
~~~
<br>

> 객체들을 정렬할때
~~~
var array = [
  {
    name: "김서현",
    age: 24
  },
  {
    name: "백승협",
    age: 19
  },
  {
    name: "강종식",
    age: 37
  },
  {
    name: "차미나",
    age: 29
  },
  {
    name: "오정균",
    age: 40
  },
];
~~~
~~~
array.sort(function (a, b) {
  return a.name > b.name ? 1 : -1;
});
console.log(array);
~~~
~~~
array.sort(function (a, b) {
  return a.age > b.age ? 1 : -1;
});
console.log(array);
~~~
<br>

### 특정 기준으로 걸러내기
> filter 함수 사용
~~~
var array = [3, 1, 4, 2, 8, 0, 9];

var filtered = array.filter(function (it) {
  return it < 5;
});
console.log(filtered);
~~~
<br>

> 객체들을 걸러낼 때
~~~
var array = [
  {
    name: "김서현",
    age: 24,
    married: false
  },
  {
    name: "백승협",
    age: 19,
    married: false
  },
  {
    name: "강종식",
    age: 37,
    married: true
  },
  {
    name: "차미나",
    age: 29,
    married: true
  },
  {
    name: "오정균",
    age: 40,
    married: false
  },
];
~~~
~~~
var filtered = array.filter(function (it) {
  return it.age > 25;
})
console.log(filtered);
~~~
~~~
var filtered = array.filter(function (it) {
  return it.married;
})
console.log(filtered);
~~~
<br>

### 요소마다 명령 내리기
> forEach 함수 사용
~~~
var array = [3, 1, 4, 2, 8, 0, 9];
var sum = 0;

array.forEach(function (item, index) {
  sum += item;
  console.log((index + 1) + "번째: " + sum);
});
~~~
~~~
var array = [
  {
    name: "김서현",
    age: 24,
    married: false
  },
  {
    name: "백승협",
    age: 19,
    married: false
  },
  {
    name: "강종식",
    age: 37,
    married: true
  },
  {
    name: "차미나",
    age: 29,
    married: true
  },
  {
    name: "오정균",
    age: 40,
    married: false
  },
];
~~~
~~~
<ol></ol>
~~~
~~~
var olEl = document.querySelector("ol");

array.forEach(function (item) {
  var liEl = document.createElement("li");
  liEl.append(item.name);
  olEl.append(liEl);
});
~~~