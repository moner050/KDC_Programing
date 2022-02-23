
// 0 ~ 4 출력
for (var i = 0; i < 5; i++) 
{
  console.log(i);
}

// 10부터 2씩 감소되면서 출력 
for (var num = 10; num > 0; num -= 2) 
{
  console.log(num);
}

// 배열을 차례대로 출력
var myNumberArray = [3, 1, 5, 11, 85, 99, 36, 66];
for ( var i = 0; i < myNumberArray.length; i++ )
{
    console.log(myNumberArray[i]);
}

// 짝수, 홀수 구분해 배열에 넣어주고 출력
var oddArray = [];
var evenArray = [];

for (var i = 10; i <= 20; i++) 
{
  if (i % 2 === 0) 
  {
    evenArray.push(i);
  } 
  else 
  {
    oddArray.push(i);
  }
}

console.log("홀수 :", oddArray);
console.log("짝수 :",evenArray);

// 도시 이름 for문을 이용해 한문장으로 출력
var cities = ['서울', '대전', '대구', '부산', '울산', '광주'];
var citiesString = '';

for (var i = 0; i < cities.length; i++) 
{
  citiesString += cities[i];
  if (i < cities.length - 1) citiesString += ', ';
}

console.log(citiesString);


// 배열을 마지막부터 한개씩 삭제하기.
var longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = longArray.length - 1; longArray.length > 0; i--) 
{
  longArray.splice(i, 1);
  console.log(longArray);
}

// 비워진것 원상복구
for (var i = 1; i <= 10; i++)
{
    longArray.push(i);
}
console.log(longArray);

// 배열을 출력하다가 5가 나오면 출력하지 않고 break
for (var i = 0; i < longArray.length; i++) 
{
  if (longArray[i] === 5) break;
  console.log(longArray[i]);
}

// i가 5보다 작을때까지 반복
var i = 0;
while (i < 5) 
{
    console.log(i);
    i++;
}



// 요소 생성
var spanElement = document.createElement("span");
// 요소 삽입
spanElement.append("삽입된 문자열");
document.querySelector("#input").append(spanElement); 



// ul과 li에 삽입
var things = ['냉장고', '코끼리', '기린'];
var steps = 
[
  '냉장고 문을 연다',
  '기린을 꺼낸다',
  '코끼리를 넣는다',
  '냉장고 문을 닫는다'
];

var thingsUl = document.querySelector(".ulClass");
for (var i = 0; i < things.length; i++) 
{
  var li = document.createElement("li");
  li.append(things[i]);
  thingsUl.append(li);
}
var stepsOl = document.querySelector(".olClass")
for (var i = 0; i < steps.length; i++) 
{
  var li = document.createElement("li");
  li.append(steps[i]);
  stepsOl.append(li);
}

// 구구단 표 만들어보기
var tableEl = document.createElement("table");
for(var i = 1; i<10; i++)
{
    var trEl = document.createElement("tr");
    for(var j = 1; j < 10; j++)
    {
        var tdEl = document.createElement("td");
        tdEl.append(i*j);
        trEl.append(tdEl);
    }
    tableEl.append(trEl);
}
document.querySelector(".muliplication").append(tableEl);
