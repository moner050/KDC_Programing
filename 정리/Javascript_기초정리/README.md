# Javascript 기초
<br>

|HTML|CSS|Javascript|
|---|---|---|
|갖다놓고|꾸미고|<b>시킨다</b>|

## 자바스크립트 맛보기
---
>HTML
~~~
<h1>안녕하세요.</h1>
위의 이 제목을 자바스크립트를 사용해 바꿉니다.
~~~

### 페이지 요소의 내용 바꿔보기  
>Javascript
~~~
<script>
  document.querySelector("h1").innerHTML = "반갑습니다.";
</script>
~~~
<br>

### 대화 상자로 조건 걸어보기
>Javascript
~~~
<script>
  if (confirm("'반갑습니다'로 바꾸시겠습니까?")) 
  {
    document.querySelector("h1").innerHTML = "반갑습니다.";
  }
</script>
~~~
<br>

### 사용자가 내용을 직접 바꾸도록 해보기
>Javascript
~~~
<script>
  var salutation = prompt("원하는 인사말을 입력하세요.");
    document.querySelector("h1").innerHTML = salutation;
</script>
~~~
---
<br><br>

### 버튼으로 사용자에게 통제권 주기
>HTML
~~~
<h1>안녕하세요.</h1>
위의 이 제목을 자바스크립트를 사용해 바꿉니다.<br>
아래 버튼을 눌러주세요.<br><br>
<button onclick="changeSalutation()">인사말 바꾸기</button>
~~~
>Javascript
~~~
<script>
  function changeSalutation () 
  {
    var salutation = prompt("원하는 인사말을 입력하세요.");
      document.querySelector("h1").innerHTML = salutation;
  }
</script>
~~~
---
<br><br>

### 시간에 따른 변화 주기
>HTML
~~~
  <h1>안녕하세요.</h1>
  1초마다 인사말이 바뀌고 있죠?
~~~
>Javascript
~~~
<script>
  var salutations = ["안녕하세요", "반갑습니다"];
  var i = 0;
  setInterval(function () 
  {
    i = 1 - i;
    document.querySelector("h1").innerHTML = salutations[i];
  }, 1000);
</script>
~~~
---
<br><br>

### 자바스크립트를 사용하는 방법
>HTML
~~~
<button onclick="showMyAlert()">알림창 버튼</button>
~~~
>Javascript
~~~
function showMyAlert () 
{
  alert("짠! 알림창이 나타났습니다.");
}
~~~
<br>

### script 태그 안에 작성
>html 문서 내 head 태그 내, 필요시 body 태그 내 특정 위치에 사용
>Javascript
~~~
<script>
  function showMyAlert () 
  {
    alert("짠! 알림창이 나타났습니다.");
  }
</script>
~~~
<br>

### .js 파일 따로 두기
~~~
<script src="script.js"></script>
~~~

### console 사용하기
~~~
showMyAlert();
~~~