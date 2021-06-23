$(function() {
    $(".nav>ul>li").click(function() {
        $(this).addClass("headerpaw");
        $(this).siblings("li").removeClass("headerpaw");
        $(".nav>ul>li:first-child").css("background", "none");
        $(".nav>ul>li:nth-child(2)").css("background", "none");
        $(".nav>ul>li:nth-child(3)").css("background", "none");
    })
})