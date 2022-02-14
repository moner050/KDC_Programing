# CSS

### CSS : Cascade Style Sheet  

|HTML|CSS|JS|
|---|---|---|
|갖다놓고|<b>꾸미고</b>|시킨다|
  
CSS를 사용하는 이유
- 웹사이트를 내가 원하는대로 꾸밀 수 있다.
- HTML을 HTML답게 사용할 수 있다.
- 정보 요소와 시각 요소의 분리
    - 설계는 HTML로, 디자인은 CSS로
  
CSS 코드 사용방법
1. 요소에 직접 적용하기
~~~
<span style="font-weight: bold; color: blue;">이 부분</span>을 두껍고 파랗게!
~~~
2. head 태그 내 style 태그에 적용
~~~
<head>
  <!-- 중략 -->

  <style>
    span {
      font-weight: bold;
      color: blue;
    }
  </style>

</head>
<body>

  <span>이 부분</span>을 두껍고 파랗게!

</body>
~~~
3. 별도의 CSS 파일에 분리해 사용  

HTML파일
~~~
<head>

  <!-- 중략 -->
  <link rel="stylesheet" type="text/css" href="style.css"/> 

</head>
<body>

  <span>이 부분</span>을 두껍고 파랗게!

</body>
~~~
  
CSS 파일  
~~~
span 
{
  font-weight: bold;
  color: blue;
}
~~~

---------------------
# CSS 선택자
> head 내 style 태그 또는 분리된 파일에 적용시
  
- ## 선택자의 종류
  - ### tag 선택자
    - 문서 내 지명된 모든 태그에 적용  

HTML
  ~~~
  <span>파랑색 글자</span>입니다.

  <div>안팍의 여백이 적용된 분홍 배경의 div 입니다.</div>
  ~~~
CSS
  ~~~
  span { color: blue; }

  div
  {
    margin: 24px;
    padding: 48px;
    background-color: pink;
  }
  ~~~

---------------
- ### class 선택자
  - 문서 내 다수 요소에 동일하게 적용될 수 있는 class 속성에 따라 적용   

HTML
  ~~~
  <h1 class="important">할 일 목록</h1>
  <ul>
    <li class="important">빨래</li>
    <li class="finished">30분 운동</li>
    <li>마트 장보기</li>
    <li class="finished">책 50페이지 이상 읽기</li>
    <li class="finished important">코딩 강좌 실습</li>
  </ul>
  ~~~
CSS
  ~~~
  .finished { color: skyblue; }
  .important { text-decoration: underline; }

  /* 특정 태그에 해당 클래스가 있을 때 */
  li.important { background-color: yellow; }

  /* 하나 이상의 클래스 */
  .important.finished { font-style: italic; }
  ~~~
---------------
- ### id 선택자
  - 문서 내 유일한 요소에 적용될 수 있는 id 속성에 따라 적용
    - 하나 이상 사용 시 자바스크립트 등에서 오류 소지
  
HTML
  ~~~
  <section id="intro">
    소개 섹션
  </section>
  <section id="board">
    게시판 섹션
  </section>
  ~~~
CSS
  ~~~
  section { padding: 32px; }

  /* 아래부터 */
  #intro { background-color: yellowgreen; }
  #board { background-color: pink; }
  ~~~
------------------------
- ### attr(속성) 선택자
  - 태그의 속성과 그 값에 따라 적용  

HTML
  ~~~
  <label for="ip-id">아이디</label>
  <input id="ip-id" type="text"/>
  <br>
  <label for="ip-pw">비밀번호</label>
  <input id="ip-pw" type="password"/>
  <br>
  <label for="ip-nm">이름</label>
  <input id="ip-nm" type="text"/>
  ~~~
CSS
  ~~~
  label 
  {
    display: inline-block;
    width: 80px;
  }

  /* 아래부터 */
  input[type=text] { background-color: skyblue; }
  label[for=ip-id] { color: blue; }
  ~~~
-------------------------
## 결합자
- ### 자손 결합자
  - 내부의 모든 요소들을 선택
  
HTML
  ~~~
  <div class="outer">
    <div>
      <div>
        <div></div>
      </div>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
  </div>
  ~~~
CSS
~~~
div 
{
  padding: 24px;
  border: 1px solid black;
  background-color: white;
}
.outer { background-color: green; }

/* 앞 선택자 뒤에 스페이스를 둠으로써 자손 요소들을 선택 */
.outer div 
{
  background-color: yellow;
}
~~~
  
- ### 자식 결합자
  - 바로 안 단계 요소들을 선택
  
CSS
~~~
  /* 자손 결합자 코드에서 수정 */
  /* 빈 공백이 아닌 > 을 넣어주면 자식(1촌 자손)만 선택 */
  .outer > div 
  {
    background-color: yellow;
  }
~~~

- ### 인접 형제(바로 다음 동생) 결합자
  - 바로 안 단계의 요소들을 선택

HTML
~~~
  <div>첫줄</div>
  <div>둘째줄</div>
  <div class="selected">선택된 줄</div>
  <div>넷째줄</div>
  <div>다섯째 줄</div>
~~~
CSS
~~~
div 
{
  padding: 12px 24px;
  border-top: 1px solid black;
}
.selected 
{
  border-top: 0;
  color: white;
  background-color: dodgerblue;
}

/* 아래부터 */
.selected + div { border-top: 0; }
~~~

----------------
## 전체 선택자
  -  모든 태그에 적용
  
HTML
~~~
 <section>
    <h1>제목</h1>
    <span>span 요소</span>
    <div>
      요소
      <div>더 안쪽 요소</div>
    </div>
    일반 텍스트
  </section>
~~~
CSS
~~~
div { background-color: white; }

/* 특정 요소의 자손/자식으로 지정하지 않으면 body 등에도 적용 */
section * 
{
  display: inline-block;
  background-color: orange;
  padding: 24px;
}
~~~
----------------
## psudo(가상) 클래스
  
HTML
~~~
<h1 class="underline">부정 가상 클래스 사용예</h1>
<ul>
  <li>특성 없음</li>
  <li class="blue">파랑글씨</li>
  <li class="blue underline">파랑글씨에 및줄</li>
  <li class="underline">파랑글씨는 아닌데 및줄</li>
</ul>
~~~
CSS
~~~
.blue { color: blue; }
.underline { text-decoration: underline; }

/* 아래부터 */
.underline:not(.blue) { color: red; }
.underline:not(.blue):not(li) { color: inherit; }
~~~
-----------------
## 순서 관련 가상 클래스

HTML
~~~
  <ul>
    <li>첫번째 글</li>
    <li>두번째 글</li>
    <li>세번째 글</li>
    <li>네번째 글</li>
    <li>다섯번째 글</li>
    <li>여섯번째 글</li>
    <li>일곱번째 글</li>
    <li>여덟번째 글</li>
  </ul>
~~~
CSS
~~~
ul { padding: 0; }
ul li 
{
  list-style: none;
  padding: 8px 16px;
  border-top: 1px solid lightgray;
}

/* 아래부터 */
ul li:first-child { border-top: 2px solid black; }
ul li:last-child { border-bottom: 2px solid black; }
ul li:nth-child(3) { color: purple; }
ul li:nth-child(even) { background-color: #eee; }
ul li:nth-child(3n+1) { text-decoration: underline; }
~~~
-----------------
## 마우스 오버 가상 클래스
  
HTML
~~~
  <button class="blue-button">
    클릭
  </button>

  <br><br>
  
  <div>
    파일
    <ul>
      <li>저장</li>
      <li>열기</li>
      <li>닫기</li>
    </ul>
  </div>
~~~
CSS
~~~
.blue-button 
{
  font-size: 1em;
  padding: 16px 24px;
  color: white;
  background-color: dodgerblue;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
}
.blue-button:hover 
{
  background-color: darkblue;
}

div 
{
  position: relative; display: inline-block;
  color: white; background-color: tomato;
  height: 56px; line-height: 56px; padding: 0 24px;
  cursor: pointer;
}
div ul 
{
  display: none;
  position: absolute;
  width: 100px; left: 12px; top: 56px; margin: 0; padding: 0;
}

/* 아래부터 */
div:hover ul { display: block; }

div ul li 
{
  background-color: #444;
  height: 44px; line-height: 44px; text-align: center;
}

/* 아래부터 */
div ul li:hover { background-color: #222; }
~~~
----------------------
## 우선순위
- 인라인 스타일 > id 선택자 > class 선택자 > 태그 선택자
- 구체적일수롶 높은 순위
- 같은 우선순위라면 다음에(더 아랫줄) 오는 것이 덮어씀