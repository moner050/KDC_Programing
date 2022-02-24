# 함수와 이벤트

## 함수 (function)
~~~
<ul></ul>
~~~
~~~
var ulEl = document.querySelector("ul");
var liEl = document.createElement("li");
liEl.append(new Date());
ulEl.append(liEl);
~~~
> new Date() : 현재 시각을 반환

<br>

### 위 명령들이 여러 번 사용되어야 한다면
> 함수로 지정하여 필요할 때 호출한다
~~~
function insertThisTime () {
  var ulEl = document.querySelector("ul");
  var liEl = document.createElement("li");
  liEl.append(new Date());
  ulEl.append(liEl);
}

insertThisTime();
insertThisTime();
insertThisTime();
~~~
---
<br>

## 값을 인자로 넣어주기
~~~
<h1>이 제목을 수정해보세요.</h1>
~~~
~~~
function setPageTitle(title) {
  document.querySelector("h1").innerHTML = title;
}

setPageTitle("변경된 제목입니다.");
~~~
<br>

~~~
1팀
<ul id="team_1"></ul>
<br>

2팀
<ul id="team_2"></ul>
<br>

3팀
<ul id="team_3"></ul>
~~~
~~~
var insertMemberToTeam = function (member, teamNumber) {
  var liEl = document.createElement("li");
  liEl.append(member);
  document.querySelector("#team_" + teamNumber).append(liEl);
};

insertMemberToTeam("김철수", 1);
insertMemberToTeam("이순희", 2);
insertMemberToTeam("박돌쇠", 3);
insertMemberToTeam("최지영", 1);
insertMemberToTeam("오발탄", 3);
~~~
---
<br>

## 값을 반환하는 함수
~~~
function getSum (number1, number2) {
  return number1 + number2;
}

console.log(getSum(10, 5));
~~~
~~~
function addNumbersBetween (number1, number2) {
  var sum = 0;
  for (var i = number1 + 1; i < number2; i++) 
  {
    sum += i;
  }
  return sum;
}

console.log(addNumbersBetween(1, 5));
~~~
>위 함수를 보다 안전하게 바꾸면?

<br>

~~~
function getAverage(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) 
  {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

var average = getAverage([2, 8, 5, 3, 10]);
console.log(average);
~~~

<br>

> return 이 발생할 때 함수는 종료

~~~
var isPrimeNumber = function (number) {
  if (number <= 1) 
  {
    return false;
  } 
  else if (number === 2) 
  {
    return true;
  } 
  else 
  {
    for (var i = 2; i < number; i++) 
    {
      if (number % i === 0) return false;
    }
    return true;
  }
}

console.log(1 + ' ' + isPrimeNumber(1));
console.log(2 + ' ' + isPrimeNumber(2));
console.log(5 + ' ' + isPrimeNumber(5));
console.log(9 + ' ' + isPrimeNumber(9));
console.log(13 + ' ' + isPrimeNumber(13));
console.log(14 + ' ' + isPrimeNumber(14));
~~~
---
<br>

## 다중 함수 응용
~~~
function getSmallerPrimeNumbers (number) {
  var result = [];
  for (var i = 1; i < number; i++) 
  {
    if (isPrimeNumber(i)) result.push(i);
  }
  return result;
}

console.log(getSmallerPrimeNumbers(100));
console.log(getAverage(getSmallerPrimeNumbers(100)));
~~~
---
<br>

## 이벤트
> 특정 용소 클릭 시 이벤트
~~~
<button onclick="insertThisTime();">현 시각 기록</button>
<ul></ul>
~~~
~~~
function insertThisTime () {
  var ulEl = document.querySelector("ul");
  var liEl = document.createElement("li");
  liEl.append(new Date());
  ulEl.append(liEl);
}
~~~
>요소 로드 완료시 이벤트
> - body에 붙일 경우 페이지의 모든 요소들(이미지, js, css 파일 등) 로드 후 실행
~~~
<body onload="sayPageIsLoaded();">
  <h1></h1>
</body>
~~~
~~~
function sayPageIsLoaded () {
  document.querySelector("h1").innerHTML = "페이지 로드 완료!"
}
~~~
---
<br>

## 팀 배정 프로그램 만들어보기
>HTML
~~~
<h1>팀 배정</h1>
<table>
  <tr>
    <td colspan="3" id="not_assigned"></td>
  </tr>
  <tr>
    <td>1팀</td>
    <td>2팀</td>
    <td>3팀</td>
  </tr>
  <tr>
    <td>
      <button>배정</button>
      <ul id="team_1"></ul>
    </td>
    <td>
      <button>배정</button>
      <ul id="team_2"></ul>
    </td>
    <td>
      <button>배정</button>
      <ul id="team_3"></ul>
    </td>
  </tr>
</table>
~~~
>CSS
~~~
body { padding: 8px 24px; }
table { width: 400px; }
td { padding: 12px 16px; border: 1px solid gray; }
ul { list-style: none; }
button { font-size: 1rem; }
~~~
>Javascript
~~~
var members = [
  '손흥민', '김영권', '이승우', '기성용', '황희찬', 
  '황희조', '구자철', '이용', '조현우', '김승규',
  '이강인', '박주호', '문선민', '김민재', '황인범', 
  '이정협', '김인성', '구성윤', '장현수', '나상호'
];
~~~
> 배정되지 않은 맴버들 표시 함수 (Javascript)
~~~
function showNotAssigneds () {
  var membersString = '';
  for (var i = 0; i < members.length; i++) 
  {
    membersString += members[i];
    if (i < members.length - 1) membersString += ', ';
  }
  document.querySelector('#not_assigned').innerHTML = membersString;
}
~~~
>페이지 로드시 실행
~~~
<body onload="showNotAssigneds();">
~~~
>목록 앞에서부터 한 명씩 빼서 원하는 팀에 배정 (Javascript)
~~~
function assignMemberToTeam (teamNumber) {
  if (members.length === 0) return;
  var member = members[0];
  member = members.splice(0, 1);
  showNotAssigneds();

  var liEl = document.createElement("li");
  liEl.append(member);
  document.querySelector("#team_" + teamNumber).append(liEl);
}
~~~
>버튼에 함수 실행 이벤트 등록 (HTML)
~~~
<button onclick="assignMemberToTeam(1)">배정</button>
<!-- ... -->
<button onclick="assignMemberToTeam(2)">배정</button>
<!-- ... -->
<button onclick="assignMemberToTeam(3)">배정</button>
~~~
