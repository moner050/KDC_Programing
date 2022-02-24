// 현재 시각을 불러오는 함수
function insertThisTime () {
    var ulEl = document.querySelector(".thisTime");
    var liEl = document.createElement("li");
    // 현재 시각을 반환
    liEl.append(new Date());
    ulEl.append(liEl);
}


// 페이지 타이틀을 바꾸는 함수
function setPageTitle(title){
    document.querySelector(".title").innerHTML = title
}
setPageTitle("변경된 제목입니다.");


// li 를 생성해 클래스에 추가시켜주는것
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


// 값을 반환하는 함수
// 더하기 함수
function getSum (number1, number2){
    return number1 + number2;
}
console.log(getSum(23 + 77));

// 사이의 수를 더한 값을 구해주는 함수
function addNumbersBetween (number1, number2) {
    var sum = 0;
    for (var i = number1 + 1; i < number2; i++) 
    {
      sum += i;
    }
    return sum;
}  
console.log(addNumbersBetween(1, 5));


// 평균값을 구하는 함수
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


// 매개변수가 소수인지 판단하는 함수
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
  

// 1부터 매개변수까지 소수인 값을 구해 배열로 출력하는 함수
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

// 버튼을 클릭하면 현 시각 기록해주는 함수
function insertThisTimeButton () {
    var ulEl = document.querySelector(".thisTimeInsert");
    var liEl = document.createElement("li");
    liEl.append(new Date());
    ulEl.append(liEl);
}

// 페이지가 로드 완료되면 페이지 로드가 완료됬다고 알려주는 함수
function sayPageIsLoaded () {
    document.querySelector(".loadTitle").innerHTML = "페이지 로드 완료!"
}


var members = [
    '손흥민', '김영권', '이승우', '기성용', '황희찬', 
    '황희조', '구자철', '이용', '조현우', '김승규',
    '이강인', '박주호', '문선민', '김민재', '황인범', 
    '이정협', '김인성', '구성윤', '장현수', '나상호'
];
// 배정받지 않은 선수들 맴버를 더해 목록을 출력하는 함수
function showNotAssigneds () {
    var membersString = '';
    for (var i = 0; i < members.length; i++) 
    {
      membersString += members[i];
      if (i < members.length - 1) membersString += ', ';
    }
    document.querySelector('#not_assigned').innerHTML = membersString;
}
// 목록 앞에서부터 한명씩 빼서 원하는 팀에 배정해주는 함수
function assignMemberToTeam (teamNumber) {
    if (members.length === 0) return;
    var member = members[0];
    member = members.splice(0, 1);
    showNotAssigneds();
  
    var liEl = document.createElement("li");
    liEl.append(member);
    document.querySelector("#footballTeam_" + teamNumber).append(liEl);
}