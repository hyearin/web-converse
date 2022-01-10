//메뉴를 클릭하면 (신발 의류 아동) 그에 해당하는 2차 메뉴가 나타난다.//
//nav-2-depth-wrap 에 active 라는 클래스가 추가된다.//
//nav-2-content 에 active 클래스가 추가된다.//

$(document).ready(function () {

    $(".nav-wrap > .nav-box > .menu-box > ul > li").click(function () {
        // $(".nav-2-depth-wrap").toggleClass("active");
        // $(".nav-2-content").toggleClass("active");

        //만약 메뉴를 눌렀는데 이미 나와있으면 메뉴가 다시 들어가라.//
        //그렇지 않으면, 메뉴가 나타난다.//
        var thisIndex = $(this).index();

        if ($(".nav-2-content").eq(thisIndex).hasClass("active")) {
            $(".nav-2-depth-wrap").removeClass("active");
            $(".nav-2-content").removeClass("active");
        } else {
            $(".nav-2-depth-wrap").addClass("active");
            $(".nav-2-content").removeClass("active");
            $(".nav-2-content").eq(thisIndex).addClass("active");
        }

    });






});