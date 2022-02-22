// 조건문

// 사이트 방문 시 선택에따라 뒤바뀌는 제목
if (confirm("이 사이트 방문이 처음이십니까?")) 
{  
    document.querySelector("h1").innerHTML = "처음 뵙겠습니다.";
} 
else 
{
    document.querySelector("h1").innerHTML = "다시 만나뵈어 기쁩니다.";
}

var myBool_1 = true;
var myBool_2 = false;
var myBool_3 = !myBool_1;
var myBool_4 = !myBool_2;

console.log("myBool_1 :", myBool_1);
console.log("myBool_2 :", myBool_2);
console.log("myBool_3 :", myBool_3);
console.log("myBool_4 :", myBool_4);

console.log(myBool_1 === myBool_3);     // false
console.log(myBool_1 === myBool_4);     // true

// else if 문
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

// 삼항연산자
var largerNumber = 10 > 24 ? 10 : 24;
console.log(largerNumber);