// 클래스 값 지정
// document.querySelector("ul li:nth-child(3)").className = "highlighted";
// document.querySelector("ul li:nth-child(4)").className = "important";
document.querySelector("ul li:nth-child(5)").className = "highlighted important";


// 클래스 추가 / 제거
document.querySelector("ul li:nth-child(4)").classList.add("highlighted");
document.querySelector("ul li:nth-child(4)").classList.add("important");

document.querySelector("ul li:nth-child(4)").classList.remove("important");
document.querySelector("ul li:nth-child(5)").classList.remove("highlighted");


// text 타입 값 지정
var textValue = document.querySelector("#ip-text").value;
console.log(textValue);


// text 타입 키 입력 리스너
function printTextInputVal () {
    console.log(document.querySelector("#ip-text").value);
}


// checkbox 타입 값 지정
var checked = document.querySelector("#ip-checkbox").checked;
console.log("ip-checkbox :", checked);
document.querySelector("#ip-checkbox").checked = true;
// document.querySelector("#ip-checkbox").checked = false;


// radio 타입 값 지정
var checked = document.querySelector("#radio_1").checked;
console.log("radio_1 :", checked);

var checked = document.querySelector("#radio_2").checked;
console.log("radio_2 :", checked);

var checked = document.querySelector("#radio_2").checked = true;
var checked = document.querySelector("#radio_3").checked = true;

// 체크된 항목의 값 찾기
var value = document.querySelector("input[name=my-radio]:checked").value;
console.log("input[name=my-radio]:checked :", value);
// 값으로 체크하기
document.querySelector("input[value='2']").checked = true;


// 요소 복사하기
var olEl = document.querySelector("ol");
var cloned = document.querySelector("ol li:first-child").cloneNode();
olEl.append(cloned);
// 내부 요소들까지 복사하기
var clonedAll = document.querySelector("ol li:first-child").cloneNode(true);
olEl.append(clonedAll);
// 요소 내 요소를 선택하기
var olEl = document.querySelector("ol");
var clonedAll = olEl.querySelector("li:first-child").cloneNode(true);
olEl.append(clonedAll);


// 요소에 이벤트 리스너 할당하기
function sayHello () {
    console.log("Hello");
}
function printTextInputVal () {
    console.log(document.querySelector("input").value);
}
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
// button 요소에 click 이벤트 할당해주기
var buttonEl = document.querySelector("button");
// buttonEl.addEventListener('click', function () {
//   sayHello();
// });
// buttonEl.addEventListener('click', sayHello);



// input 요소에 keyup 이벤트 할당
var inputEl = document.querySelector("input");
// inputEl.addEventListener('keyup', printTextInputVal);