
function setMenu(_menu)
{
    var menus = document.querySelectorAll("nav li");
    menus.forEach(function (menu) 
    { menu.classList.remove('on'); });

    document.querySelector("nav li." + _menu).classList.add("on");

    document.querySelector("main").className = _menu;
}


function setDescLength ()
{
    var descLengthSpan = document.querySelector("span.descLength");
    var descLengthInput = document.querySelector("input.description").value.length + "/20";

    descLengthSpan.innerHTML = descLengthInput;
}