# 객체와 스타일
## 객체
여러 데이터를 하나로 묶을 수 있는 단위
~~~
var person_1 = {
  name: 'Alice',
  age: 24,
  married: false
}

console.log(person_1);

console.log(person_1.name);
console.log(person_1.age);
console.log(person_1.married);

console.log(person_1["name"]);
console.log(person_1['age']);
~~~
<br>

>어떤 종류의 데이터든 포함 가능
~~~
var person_1 = {
  name: 'Alice',
  age: 24,
  married: false,
  likes: ['reading', 'k-pop', 'cycling'],
  job: {
    company: 'Macrosoft',
    role: 'publisher',
    years: 2
  },
  salutation: function () {
    console.log("안녕하세요, 엘리스에요.");
  }
}

console.log(person_1);
for (var i = 0; i < person_1.likes.length; i++) 
{
  console.log(person_1.likes[i]);
}
console.log(person_1.job.company);
console.log(person_1["job"]["role"]);
console.log(person_1["job"].years);
person_1.salutation();
~~~
<br>

>입력한 항목 변경 가능
~~~
person_1.age = 25;
person_1.likes.push('cat');
console.log(person_1);
~~~
<br>

>객체에 항목 추가 가능
~~~
var person_2 = {};
person_2.name = 'Peter';
person_2.age = 30;
person_2.married = true;
person_2.likes = ['console game', 'pizza', 'climbing', 'movie'];
person_2.job = {
  company: 'Booble',
  role: 'programmer',
  years: 5
}
person_2.salutation = function () {
  console.log("피터라고 합니다. 반갑습니다.");
}

console.log(person_2);
~~~
<br>

>배열의 요소로 포함되어 활용될 수 있음
~~~
var people = [person_1, person_2];
console.log(people);

people.push({
  name: 'Natalie',
  age: 27,
  married: false,
  likes: ['yoga', 'coffee'],
  job: {
    company: 'Pear',
    role: 'designer',
    years: 4
  },
  salutation: function () {
    console.log("디자이너 나탈리에요.");
  }
})

console.log(people);
for (var i = 0; i < people.length; i++) 
{
  people[i].salutation();
}
~~~
---
<br>

## 웹페이지에 활용
>HTML
~~~
<body onload="fillTable()">
    <table>
    <tr>
        <th>이름</th>
        <th>나이</th>
        <th>회사</th>
        <th>역할</th>
        <th>연차</th>
    <tr>
    </table>
<body>
~~~
>CSS
~~~
th, td { border: 1px solid gray; padding: 6px 12px; }
~~~
>Javascript
~~~
function fillTable () {
  for (var i = 0; i < people.length; i++) 
  {
    var trEl = document.createElement("tr");

    var tdEl_1 = document.createElement("td");
    tdEl_1.append(people[i].name);
    trEl.append(tdEl_1);

    var tdEl_2 = document.createElement("td");
    tdEl_2.append(people[i].age);
    trEl.append(tdEl_2);

    var tdEl_3 = document.createElement("td");
    tdEl_3.append(people[i].job.company);
    trEl.append(tdEl_3);

    var tdEl_4 = document.createElement("td");
    tdEl_4.append(people[i].job.role);
    trEl.append(tdEl_4);

    var tdEl_5 = document.createElement("td");
    tdEl_5.append(people[i].job.years);
    trEl.append(tdEl_5);

    document.querySelector("table").append(trEl);
  }
}
~~~
---
<br>

## 스타일 제어하기
>HTML
~~~
<div>MY DIV</div>
~~~
>Javascript
~~~
var divEl = document.querySelector("div");
divEl.style.color = "blue";
~~~
~~~
divEl.style.backgroundColor = "skyblue";
divEl.style.padding = "24px 36px";
divEl.style.display = "inline-block";
divEl.style.borderRadius = "12px";
~~~
---
<br>

## 사용자가 스타일을 조정할 수 있는 DIV 만들어보기
>HTML
~~~
<div onclick="changeStyle();">날 클릭해서 스타일을 바꿔보세요!</div>
~~~
>Javascript
~~~
function changeStyle () {
  var newStyle = {};
  newStyle.attribute = prompt("어떤 스타일을 변경하시겠어요?");
  newStyle.value = prompt("어떤 값을 입력하시겠어요?");

  console.log(newStyle);

  document.querySelector("div").style[newStyle.attribute] = newStyle.value;
}
~~~