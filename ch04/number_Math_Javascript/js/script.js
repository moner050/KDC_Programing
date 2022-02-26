
// 문자열을 숫자로 바꾸기
var numStr = "10";
console.log(typeof numStr);
console.log(numStr + 5);

var numCast = Number(numStr);
console.log(typeof numCast);
console.log(numCast + 5);


// 숫자로 바꿀 수 있는 문자열인지 검사
var num1 = Number('114');
var num2 = Number('24B');

console.log(num1);
console.log(num2);

console.log(Number.isNaN(num1));
console.log(Number.isNaN(num2));


// Math 함수를 이용해 절대값 구하기
var absNum = Math.abs(-1);
console.log("absNum: ", absNum);

function getDifference(num1, num2) {
  return Math.abs(num1 - num2);
}

console.log("getDifference(4, 9) :", getDifference(4, 9));
console.log("getDifference(9, 4) :", getDifference(9, 4));


// Math의 floor(내림), ceil(올림), round(반올림) 함수
console.log("Math.ceil(2.4) :", Math.ceil(2.4));
console.log("Math.floor(2.4) :", Math.floor(2.4));
console.log("Math.round(2.4) :", Math.round(2.4));

console.log("Math.ceil(2.7) :", Math.ceil(2.7));
console.log("Math.floor(2.7) :", Math.floor(2.7));
console.log("Math.round(2.7) :", Math.round(2.7));


// 제곱 구하기
console.log(Math.pow(2, 3));


// 배열 정렬
var arrayInt = [3, 1, 4, 2, 8, 0, 9];
// 오름차순
arrayInt.sort(function (a, b) {
  return a > b ? 1 : -1;
});
console.log("arrayInt :", arrayInt);
// 내림차순
arrayInt.sort(function (a, b) {
  return a < b ? 1 : -1;
});
console.log("arrayInt :", arrayInt);


// 문자열 배열 정렬
var arrayStr = ["melon", "banana", "kiwi", "apple", "orange", "grape"];
// 오름차순
arrayStr.sort(function (a, b) {
  return a > b ? 1 : -1;
});
console.log("arrayStr :", arrayStr);
// 내림차순
arrayStr.sort(function (a, b) {
  return a < b ? 1 : -1;
});
console.log("arrayStr :", arrayStr);


// 객체 정렬
var arrayObj = [
    {
      name: "김서현",
      age: 24
    },
    {
      name: "백승협",
      age: 19
    },
    {
      name: "강종식",
      age: 37
    },
    {
      name: "차미나",
      age: 29
    },
    {
      name: "오정균",
      age: 40
    },
];
// 오름차순
arrayObj.sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
});
console.log("arrayObj :", arrayObj);
// 내림차순
arrayObj.sort(function (a, b) {
    return a.age > b.age ? 1 : -1;
});
console.log(arrayObj);



// filter를 이용해 특정 기준으로 걸러내기
var arrayFilter = [3, 1, 4, 2, 8, 0, 9];
// 5 미만인 수만 추출
var filtered = arrayFilter.filter(function (it) {
    return it < 5;
});
console.log("filtered :", filtered);



// 객체를 filter로 걸러낼때
var arrayObjFilter = [
    {
      name: "김서현",
      age: 24,
      married: false
    },
    {
      name: "백승협",
      age: 19,
      married: false
    },
    {
      name: "강종식",
      age: 37,
      married: true
    },
    {
      name: "차미나",
      age: 29,
      married: true
    },
    {
      name: "오정균",
      age: 40,
      married: false
    },
];
// 나이가 25살 초과인 사람만
var filtered = arrayObjFilter.filter(function (it) {
    return it.age > 25;
});
console.log("filtered :", filtered);
// 결혼한 사람만
var filtered = arrayObjFilter.filter(function (it) {
    return it.married;
})
console.log("filtered :", filtered);



// forEach 함수 사용해 순서 정렬
var arrayFE = [3, 1, 4, 2, 8, 0, 9];
var sum = 0;

arrayFE.forEach(function (item, index) {
  sum += item;
  console.log((index + 1) + "번째: " + sum);
});

// forEach 함수 사용해 객체 순서 정렬
var arrayObjFe = [
    {
      name: "김서현",
      age: 24,
      married: false
    },
    {
      name: "백승협",
      age: 19,
      married: false
    },
    {
      name: "강종식",
      age: 37,
      married: true
    },
    {
      name: "차미나",
      age: 29,
      married: true
    },
    {
      name: "오정균",
      age: 40,
      married: false
    },
];

var olEl = document.querySelector("ol");

arrayObjFe.forEach(function (item) {
  var liEl = document.createElement("li");
  liEl.append(item.name);
  olEl.append(liEl);
});