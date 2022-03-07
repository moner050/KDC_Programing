// 메뉴 이동 
function setMenu(_menu) {
    // setMenu 함수를 완성해주세요.
    
    var menus = document.querySelectorAll(".sidebar__nav-item");
    menus.forEach(function (menu)
    {
      menu.classList.remove('on');
    });

    document.querySelector(".sidebar__nav-item." + _menu).classList.add('on');

    document.querySelector("main").className = _menu;

}

function showVideoClips() {
  // showVideoClips 함수를 완성해주세요.
}

function init() {
  showVideoClips();
}


document.addEventListener('DOMContentLoaded', () => {
  // DOM이 load되면 init함수 실행
  init();
});