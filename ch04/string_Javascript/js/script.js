// 문자열의 길이 구하기
var myString1 = "동해물과 백두산이 마르고 닳도록";
console.log(myString1.length);

// n번째 글자 구하기
var myLetter = "자바스크립트"[3];
console.log(myLetter);
// 바꿔넣기는 동작하지 않음
var myString2 = "서울소곱창";
myString2[3] = "막";
console.log(myString2);

// 글자 수로 가르기
var myString3 = "0123456789";

console.log(myString3.slice(3));
console.log(myString3.slice(-3));
console.log(myString3.slice(4, 8));
console.log(myString3.slice(0, -3));

// replace 활용하여 문자열 일부 치환
var myString4 = "저는 서울에 살고 있는 서울 시민입니다.";
console.log(myString4.replace("서울", "부산"));
console.log(myString4);
while( myString4.indexOf("서울") !== -1)
{
    myString4 = myString4.replace("서울", "부산");
}
console.log(myString4);

// indexOf 함수를 활용해 문자열 내 다른 문자열 위치 찾기
var myString5 = "한겨울에 밀짚모자 꼬마 눈사람";
console.log(myString5.indexOf("꼬마"));
console.log(myString5.indexOf("산타"));

// split함수를 이용해 특정 문자 기준으로 배열로 분할
var myString6 = "010-1234-5678";
console.log(myString6.split("-"));

// toUpperCase, toLowerCase 함수를 이용해서 전체 대문자, 소문자 변환
var myString7 = "Merry Christmas!";
console.log(myString7.toUpperCase());
console.log(myString7.toLowerCase());

// trim함수 이용해서 공백 없에기
var myString8 = " 하나 ";
console.log(myString8.length);
console.log(myString8.trim().length);
