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
    .absolute 
    {
    position: absolute;
    }
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
body > div > * 
{
  background-color: yellowgreen;
}
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