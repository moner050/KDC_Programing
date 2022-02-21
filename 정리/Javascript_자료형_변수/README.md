# Javascript 자료형과 변수  
  
## HTML 요소의 내용 바꾸기
>HTML
~~~
<h1>페이지 제목</h1>

<h2>자료형들 실험해보기</h2>
<div id="typesTest"></div>
~~~
>Javascript

>   document.querySeloctor(선택자)
>   - CSS 선택자처럼 페이지의 요소 선택
~~~
document.querySelector("h1").innerHTML = "자료형과 변수";
~~~
---
<br><br>

## 자료형(Type)
> 데이터의 자료형을 확인하는 방법
>Javascript
~~~
typeof "Hello"  
// "string"
~~~
---
<br><br>

## string : 문자열
>Javascript
~~~
document.querySelector("#typesTest").innerHTML = "안녕하세요.";
~~~
> 자바스크립트 구문을 여러 줄에 나눠 쓰는 것도 가능하다.
~~~
document.querySelector("#typesTest")
  .innerHTML = "안녕하세요.";

document.querySelector("#typesTest").innerHTML
  = "안녕하세요.";
~~~

<br>

~~~
console.log("안녕하세요.");
console.log(typeof "안녕하세요");
~~~
> 세미콜론(;) : 필수는 아님.  한 줄에 여러 명령어를 넣을 수 있도록 함
~~~
console.log("안녕하세요."); console.log(typeof "안녕하세요");
~~~

<br>

> 문자열을 + 로 연결하면(문자열에 문자열을 더하면) 이어진 문자열이 출력됨
~~~
console.log("안녕하세요." + "반갑습니다.");
console.log("안녕하세요." + " " + "반갑습니다.");
~~~
> 다른 연산자(-, /, * 등)는 작동하지 않음
~~~
console.log("안녕하세요." - "하세요.");  
// NaN
~~~
---
<br>

## number : 숫자
~~~
typeof 1
// "number"
~~~
~~~
document.querySelector("#typesTest").innerHTML = 100;
~~~

<br>

>수학 연산자로 사칙연산 수행
~~~
1 + 2
5 - 3.7
-0.5 + 3.14 * 2
4 / (1 + 5)
~~~

<br>

>나머지 연산자
~~~
13 % 5
// 3
~~~
---
<br>

## 문자열과 숫자를 더하면 문자열이 됨.
~~~
"Number " + 1
// 결과: "Number 1"
~~~
---
<br>

## 변수(variable)
데이터를 담는 주머니 - 모든 종류의 데이터를 할당할 수 있음
> 데이터들이 직접 입력된 코드
~~~
document.querySelector("h1").innerHTML = "자료형과 변수";
~~~
<br>

>var : 변수를 선언하는 구문
~~~
var salutation = "안녕하세요, 반갑습니다!";
var typesTestDiv = document.querySelector("#typesTest");

typesTestDiv.innerHTML = salutation;
// document.querySelector("#typesTest").innerHTML
//   = "안녕하세요, 반갑습니다!";
~~~
<br>

>변수마다 선언은 한 번, 값은 이후 변경 가능
~~~
var myNumber = 1;
console.log(myNumber); // 1

myNumber = 3;
console.log(myNumber); // 3

myNumber = myNumber + 2;
console.log(myNumber); // 5
~~~
<br>

>++, -- : 1씩 증가 / 감소 연산자
~~~
myNumber++;
console.log(myNumber);

myNumber--;
console.log(myNumber);
~~~
<br>

>+=, -=, *=, /=, %= : 각각의 연산을 수행하여 대입
~~~
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
~~~
<br>

>문자열은 += 가능
~~~
var myName = '홍';
myName += '길동';

console.log(myName);
~~~