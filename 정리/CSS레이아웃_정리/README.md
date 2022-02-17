# CSS 레이아웃

## position : 위치 관련 스타일
<br>  

### static : 기본값
> 문서를 요소의 일반적인 흐름에 따라 배치

<br>

HTML
~~~
  <span>SPAN 1</span>
  <span>SPAN 2</span>
  <span>SPAN 3</span>
  <span>SPAN 4</span>
~~~
CSS
~~~
    span 
    {
    font-size: 1.2rem;
    color: white;
    background-color: tomato;
    border: 2px solid firebrick;
    }
~~~
---
<br>

### relative : 상대적 배치
> static과 같으니 top, bottom, left, right 속성을 지정 가능  
> - absolute를 포함하는 부모 요소로 주로 사용됨

<br>

CSS
~~~
    span { position: relative; }
    span:nth-child(1) { top: 12px; }
    span:nth-child(2) { right: 12px; }
    span:nth-child(3) { bottom: 12px; }
    span:nth-child(4) { left: 12px; }
~~~
---
<br>

### absolute : 절대적 배치
>   족보상 가장 가까운, static이 아닌 이상 조상 기준 상대적 위치에 배치
> - 페이지 내 공간을 차지하지 않음
> - static이 아닌 요소들끼리는 z-index값으로 위, 아래(앞쪽, 뒷쪽) 배치

<br>

HTML
~~~
  <div class="relative">
    <div class="absolute _1"></div>
    <div class="absolute _2"></div>
  </div>
~~~
CSS
~~~
    div 
    {
      width: 400px;
      height: 400px;
    }
    .relative 
    {
      position: relative;
      background-color: green;
    }
    .absolute { position: absolute; }
    .absolute._1 
    {
      top: 100px;
      left: 25%;
      background-color: red;
      z-index: 2;
    }
    .absolute._2 
    {
      top: 200px;
      left: 50%;
      background-color: blue;
      z-index: 1;
    }
~~~
---
<br>

### fixed : 고정
> 부모 요소가 아닌, viewport를 기준으로 배치
> - 스크롤에 영향을 받지 않음
> - 페이지 내 공간을 차지하지 않음

<br>

HTML
~~~
  <div class="tall"></div>
  <div class="fixed"></div>
~~~
CSS
~~~
    .tall 
    {
      margin: 48px;
      width: 200px;
      height: 5000px;
      background-color: yellowgreen;
    }
    .fixed 
    {
      position: fixed;
      top: 24px;
      left: 80px;
      width: 300px;
      height: 100px;
      background-color: purple;
    }
~~~
---
<br>

### display : 요소를 보여주는 방법  
<br>

#### inline | block | inline-block

<br>

HTML
~~~
  <div>
    <div>DIV 요소</div>
    <span>SPAN 요소</span>
    <p>P 요소</p>
  </div>
~~~
CSS
~~~
/* 기본 세팅 */
body > div > * { background-color: yellowgreen; }
~~~
> 아래부터
~~~
body > div>  * { display: inline; }
~~~
~~~
body > div>  * { display: block; }
~~~
~~~
body > div>  * { display: inline-block; }
~~~
---
<br>

### none

|스타일|설명|비고|
|---|---|---|
|display : none|요소를 화면에 두지 않음|자리를 차지하지 않음|
|visibility : hidden|요소를 화면에 두되, 보이지 않도록 함|자리 차지|
|opacity : 0|요소를 화면에 두고 불투명도를 0으로 함|자리 차지|

<br>

HTML
~~~
body > div > * 
{
  background-color: yellowgreen;
  display: inline-block;
  padding: 24px;
}
~~~
> 아래부터

CSS
~~~
body > div > span { display: none; }
~~~
~~~
body > div > span { visibility: hidden; }
~~~
~~~
body > div > span { opacity: 0; }
~~~
---
<br>

## CSS 그리드 레이아웃

<br>

페이지를 구획으로 나누는 다양한 방법이다.

<br>

HTML
~~~
  <div class="wrapper">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
  </div>
~~~
CSS
~~~
/* 기본세팅 */
body { margin: 0; padding: 0; }
.wrapper { border: 2px solid black; }
.wrapper > div { background-color: yellow; }
.wrapper > div:nth-child(even) { background-color: yellowgreen;}
~~~
## 부모 요소를 grid 디스플레이로 설정  

~~~
.wrapper { display: grid; }
~~~

## 열의 갯수와 크기 지정해주기
<br>

> 절대값으로 해주기
~~~
.wrapper { grid-template-columns: 100px 200px 300px; }
~~~
<br>

> 비율 분할(fractions)
~~~
.wrapper { grid-template-columns: 1fr 2fr 3fr 4fr; }
~~~
<br>

> 혼합 사용
~~~
.wrapper { grid-template-columns: 200px 1fr 3fr; }
~~~
<br>

> 반복 지정
~~~
.wrapper { grid-template-columns: repeat(3, 1fr); }
~~~
<br><br>

## 행의 갯수와 크기 지정해주기
<br>

> 절대값으로 해주기
~~~
.wrapper 
{
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px 400px;
}
~~~
<br>

> 상대값은 높이가 지정되어 있을 때 가능
~~~
.wrapper 
{
  grid-template-columns: repeat(3, 1fr);
  height: 800px;
  grid-template-rows: 1fr 2fr 3fr;
}
~~~
<br>

---
## 내부 컨텐츠의 높이에 따라 해주기

<br>

HTML
~~~
  <div class="wrapper">
    <div><div>1</div></div>
    <div><div>2</div></div>
    <div><div>3</div></div>
    <div><div>4</div></div>
    <div><div>5</div></div>
    <div><div>6</div></div>
    <div><div>7</div></div>
    <div><div>8</div></div>
    <div><div>9</div></div>
  </div>
~~~
CSS
~~~
/* 전용 세팅 */
.wrapper { grid-template-columns: repeat(3, 1fr); }
.wrapper > div > div { background-color: orange; }
.wrapper > div:nth-child(even) > div { background-color: tomato; }
.wrapper > div:nth-child(3n + 1) > div { height: 100px; }
.wrapper > div:nth-child(3n + 2) > div { height: 200px; }
.wrapper > div:nth-child(3n) > div { height: 300px; }
~~~
> 행의 크기 지정해주기
~~~
.wrapper { grid-template-rows: 100px auto minmax(100px, 200px); }
~~~
---
<br>

## 선 번호로 영역 지정 해주기

<br>

HTML
~~~
  <div class="wrapper">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
~~~
CSS
~~~
/* 기본 세팅 */
.wrapper 
{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 150px);
}
.wrapper > div { background-color: yellow; }
.wrapper > div:nth-child(even) { background-color: yellowgreen; }
~~~
> 아래부터
~~~
.wrapper > div:nth-child(1) 
{
  background-color: red;
  grid-column: 1/4;
  grid-row: 1/2;
}
.wrapper > div:nth-child(2) 
{
  background-color: green;
  grid-column: 1/2;
  grid-row: 2/4;
}
.wrapper > div:nth-child(3) 
{
  background-color: purple;
  grid-column: 2/4;
  grid-row: 2/4;
}
.wrapper > div:nth-child(4) 
{
  background-color: blue;
  grid-column: 1/3;
  grid-row: 4/5;
}
.wrapper > div:nth-child(5) 
{
  background-color: orange;
  grid-column: 3/4;
  grid-row: 4/5;
}
~~~
<br>

## 이름으로 영역 지정 해주기

<br>

HTML
~~~
  <div class="wrapper">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
~~~
CSS
~~~
.wrapper 
{
  grid-template-areas: 
    "red red red"
    "green blue blue"
    "green blue blue"
    "purple purple orange";
}
.wrapper > div:nth-child(1) 
{
  background-color: red;
  grid-area: red;
}
.wrapper > div:nth-child(2) 
{
  background-color: green;
  grid-area: green;
}
.wrapper > div:nth-child(3) 
{
  background-color: blue;
  grid-area: blue;
}
.wrapper > div:nth-child(4) 
{
  background-color: purple;
  grid-area: purple;
}
.wrapper > div:nth-child(5) 
{
  background-color: orange;
  grid-area: orange;
}
~~~
<br>

## grid간 공간 띄우기
~~~
.wrapper { gap: 10px; }
~~~