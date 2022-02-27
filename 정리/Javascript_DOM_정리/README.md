# DOM 기능들
## HTML 요소의 클래스 다루기
>HTML
~~~
<ul>
  <li><span>국어</span></li>
  <li><span>수학</span></li>
  <li><span>사회</span></li>
  <li><span>과학</span></li>
  <li><span>체육</span></li>
</ul>
~~~
>CSS
~~~
.highlighted span { background-color: yellowgreen; }
.important span { font-weight: bold; color: blue; }
~~~
<br>

### 클래스 값 지정
className 속성에 값 대입
>Javascript
~~~
document.querySelector("ul li:nth-child(3)").className = "highlighted";
~~~
~~~
document.querySelector("ul li:nth-child(3)").className = "important";
~~~
~~~
document.querySelector("ul li:nth-child(3)").className = "highlighted important";
~~~
### 클래스 추가 / 제거
classList 의 add, remove 사용
~~~
document.querySelector("ul li:nth-child(4)").classList.add("highlighted");
document.querySelector("ul li:nth-child(4)").classList.add("important");

// 이미 있는 클래스는 추가되지 않음
document.querySelector("ul li:nth-child(4)").classList.add("important");

document.querySelector("ul li:nth-child(3)").classList.remove("important");
~~~
---
<br>

## input 요소 다루기
>HTML
~~~
<input id="ip-text" type="text"/>
<br>
<input id="ip-checkbox" type="checkbox"/>
<br>
<input name="my-radio" id="radio_1" type="radio" value="1"/>
<input name="my-radio" id="radio_2" type="radio" value="2"/>
<input name="my-radio" id="radio_3" type="radio" value="3"/>
~~~
<br>

### text 타입 값 지정
~~~
var textValue = document.querySelector("#ip-text").value;
console.log(textValue);

document.querySelector("#ip-text").value = "반갑습니다.";
document.querySelector("#ip-text").value = "";
~~~
### text 타입 키 입력 리스너
~~~
function printTextInputVal () {
  console.log(document.querySelector("#ip-text").value);
}
~~~
> onkeyup 사용
~~~
<input id="ip-text" type="text" onkeyup="printTextInputVal();"/>
~~~
<br>

### checkbox 타입 값 지정
~~~
var checked = document.querySelector("#ip-checkbox").checked;
console.log(checked);

document.querySelector("#ip-checkbox").checked = true;
document.querySelector("#ip-checkbox").checked = false;
~~~
> 토글 하려면??
<br>

### radio 타입 값 지정
~~~
var checked = document.querySelector("#radio_1").checked;
console.log(checked);

var checked = document.querySelector("#radio_2").checked;
console.log(checked);

var checked = document.querySelector("#radio_2").checked = true;
var checked = document.querySelector("#radio_3").checked = true;
~~~
<br>

>체크된 항목의 값 찾기
~~~
var value = document.querySelector("input[name=my-radio]:checked").value;
~~~
<br>

>값으로 체크하기
~~~
document.querySelector("input[value='3']").checked = true;
~~~
---
<br>

## 요소 복사하기
~~~
<ol>
  <li><span>내부 텍스트</span></li>
</ol>
~~~
<br>

>cloneNode 함수 사용
~~~
var olEl = document.querySelector("ol");

var cloned = document.querySelector("ol li:first-child").cloneNode();
olEl.append(cloned);
~~~
<br>

> 내부 요소들까지 복사하려면 인자로 true를 넣어줌
~~~
var clonedAll = document.querySelector("ol li:first-child").cloneNode(true);
olEl.append(clonedAll);
~~~
<br>

### 요소 내 요소 선택하기
~~~
var olEl = document.querySelector("ol");
var clonedAll = olEl.querySelector("li:first-child").cloneNode(true);
olEl.append(clonedAll);
~~~
---
<br>

## 요소에 이벤트 리스너 할당하기
~~~
function sayHello () {
  console.log("Hello");
}
function printTextInputVal () {
  console.log(document.querySelector("input").value);
}
~~~
~~~
function putButtonAndInput () {
  var bodyEl = document.querySelector("body");
  var buttonEl = document.createElement("button");
  buttonEl.append("버튼");
  var brEl = document.createElement("br");
  var inputEl = document.createElement("input");

  bodyEl.append(buttonEl);
  bodyEl.append(brEl);
  bodyEl.append(inputEl);
}
~~~
<br>

>button 요소에 click 이벤트 할당
~~~
var buttonEl = document.querySelector("button");
buttonEl.addEventListener('click', function () {
  sayHello();
});
~~~
~~~
var buttonEl = document.querySelector("button");
buttonEl.addEventListener('click', sayHello);
~~~
<br>

>input 요소에 keyup 이벤트 할당
~~~
var inputEl = document.querySelector("input");
inputEl.addEventListener('keyup', printTextInputVal);
~~~