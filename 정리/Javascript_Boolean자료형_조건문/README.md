# Javascript Boolean 자료형과 조건문
<br>

>HTML
~~~
<h1></h1>
~~~
>Javascript
~~~
  if (confirm("이 사이트 방문이 처음이십니까?")) 
  {
    document.querySelector("h1").innerHTML = "처음 뵙겠습니다.";
  } 
  else 
  {
    document.querySelector("h1").innerHTML = "다시 만나뵈어 기쁩니다.";
  }
~~~
<br>

## boolean : 참/거짓
~~~
var myBool_1 = true;
var myBool_2 = false;

console.log(myBool_1);
console.log(myBool_2);
~~~
---
<br>

## ! : 부정 연산자
~~~
console.log(!myBool_1);
console.log(!myBool_2);
~~~
~~~
var myBool_3 = !myBool_1;
var myBool_4 = !myBool_2;

console.log(myBool_3);
console.log(myBool_4);
~~~
---
<br>

## ==, === 연산자  
- 양쪽 값이 같으면 true, 다르면 false를 반환
~~~
console.log(1 === 1);                   // true
console.log(1 === 2);                   // false
console.log(1 === 2 - 1);               // true

console.log('hello' === 'hello');       // true
console.log('hello' === 'bye');         // false

console.log(true === true);             // true
console.log(true === false);            // false

console.log(myBool_1 === myBool_3);     // false
console.log(myBool_1 === myBool_4);     // true
~~~
<br>

>== : 같은 타입으로 바꾸어 비교  
>=== : 타입이 같은지 여부도 비교
~~~
console.log(1 == '1');                  // true
console.log(1 === '1');                 // false

console.log(0 == '');                   // true
console.log(0 === '');                  // false

console.log(0 == false);                // true
console.log(0 === false);               // false
~~~
---
<br>

## !=, !== 연산자
- 양쪽 값이 다르면 true, 같으면 false를 반환
- 각각 ==, === 와 반대로 작동
> = 연산자와 혼동하지 말 것!
~~~
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== 2 - 1);

console.log(true !== true);
console.log(true !== false);

console.log(myBool_1 !== myBool_3);
console.log(myBool_1 !== myBool_4);

~~~
---
<br>

## >, >=, <, <= 연산자
- 숫자일 경우 크기를 비교
- 문자열일 경우 알파벳순 비교 (뒤에 오는 글자를 더 크게)
~~~
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 <= 10);

console.log(10 > 9);
console.log(10 < 9);

console.log('a' < 'b');

console.log(true > false);
~~~
---
<br>

## && : AND 연산자
- 양쪽 모두 true 일때만 true를 반환
~~~
console.log(true && true)
console.log(true && false)

console.log(myBool_1 && myBool_3);
console.log(myBool_1 && myBool_4);

console.log(1 + 1 === 2 && 1 + 2 === 3);
console.log(1 + 1 === 3 && 1 + 2 === 3);

console.log(true && myBool_1 && 1 + 1 === 2 && 'hello' === 'hello');
console.log(true && myBool_1 && 1 + 1 === 2 && 'hello' === 'bye');
~~~
---
<br>

## || : OR 연산자
- 양쪽 중 하나 이상이 true 이면 true 를 반환
~~~
console.log(true || true)
console.log(true || false)
console.log(false || false)

console.log(myBool_1 || myBool_3);

console.log(1 + 1 === 3 || 1 + 2 === 3);

console.log(false || myBool_2 || 1 + 1 === 3 && 'hello' === 'hello');
~~~
~~~
console.log((true && false) || true);
console.log((100 > 200 || 20 <= 30) && '감자' < '고구마');
~~~
---
<br><br>

# 조건문
## if 문
> 조건이 true 일 시 명령문 실행
~~~
  if (true) console.log("YES");

  if (true) 
  {
    console.log("Yes,");
    console.log("it's");
    console.log("true!");
  }
~~~
> 조건이 false 일 시 실행하지 않음
~~~
  if (false) console.log("YES");
~~~
---
<br>

## else 문
> if 문의 조건이 사실이 아닐 시 실행
~~~
  if (false) 
  {
    console.log("YES");
  } 
  else
  {
    console.log("NO");
  };
~~~
~~~
  if (1 + 1 === 2) 
  {
    alert("1 + 1은 2 입니다.");
  }

  if ("Apple" > "Banana") 
  {
    console.log("Apple은 Banana보다 앞에 있습니다.");
  } 
  else 
  {
    console.log("Apple은 Banana보다 뒤에 있습니다.");
  }
~~~
---
<br>

## else if 문
~~~
var myNumber = 25;
if (myNumber % 3 === 0) 
{
  console.log(myNumber + "는 3의 배수입니다.");
} 
else if (myNumber % 3 === 1) 
{
  console.log(myNumber + "는 3의 배수 + 1입니다.");
} 
else 
{
  console.log(myNumber + "는 3의 배수 + 2입니다.");
}
~~~
~~~
    <h1></h1>
~~~
~~~
  if (confirm("이 사이트 방문이 처음이십니까?")) 
  {
    document.querySelector("h1").innerHTML = "처음 뵙겠습니다.";
  } 
  else 
  {
    document.querySelector("h1").innerHTML = "다시 만나뵈어 기쁩니다.";
  }
~~~
---
<br>

## 삼항연산자
> ### (조건) ? [참일때의 값] : [거짓일 때의 값]
~~~
var largerNumber = 10 > 24 ? 10 : 24;
console.log(largerNumber);
~~~