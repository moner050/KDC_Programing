// 메뉴 이동
function setMenu(_menu)
{
    var menus = document.querySelectorAll("nav li");
    menus.forEach(function (menu) 
    { menu.classList.remove('on'); });

    document.querySelector("nav li." + _menu).classList.add("on");

    document.querySelector("main").className = _menu;
}

// 글자 길이 출력
function setDescLength ()
{
    var descLengthSpan = document.querySelector("span.descLength");
    var descLengthInput = document.querySelector("input.description").value.length + "/20";

    descLengthSpan.innerHTML = descLengthInput;
}

// 나의 정보 보여주기 함수
function showMyInfo()
{
    document.querySelector("#myInfoId").innerHTML = my_info["id"];
    document.querySelector("#myInfoUserName").innerHTML = my_info.user_name;
    document.querySelector("#ip-intro").value = my_info.introduction;
    document.querySelector("#sp-intro").innerHTML = my_info.introduction;
    document.querySelector("#myinfo input[type=radio][value=" + my_info.as +"]").checked = true;
    document.querySelectorAll("#myinfo input[type=checkbox]").forEach(function (checkbox)
    {
        checkbox.checked = false;
        // console.log(checkbox);
    });
    
    my_info.interest.forEach(function (interest)
    {
        document.querySelector("#myinfo input[type=checkbox][value=" + interest + "]").checked = true;
    });
}

// 나의 정보 수정 함수
function setEditMyInfo(on)
{
    document.querySelector("#myinfo > div").className = on ? 'edit' : 'non-edit';
    
    document.querySelectorAll("#myinfo input").forEach(function (input)
    {
        input.disabled = !on;
    });
    showMyInfo();
}

// 나의 정보 저장하기 함수
function updateMyInfo()
{
    my_info.introduction = document.querySelector("#ip-intro").value;
    my_info.as =  document.querySelector("#myinfo input[type=radio]:checked").value;

    var interests = [];
    document.querySelectorAll("#myinfo input[type=checkbox]:checked").forEach(function (checkbox)
    {
        interests.push(checkbox.value);
        // console.log(checkbox.value);
    });
    my_info.interest = interests;
    setEditMyInfo(false);
    showMyInfo();
}




// 모든 함수 실행
function init()
{
    showMyInfo();
}