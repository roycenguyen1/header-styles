$(".has-sub").click(function () {
  $(".submenu").slideToggle("fast");
});

$(".nav-link").click(function () {
  $(this).toggleClass("show");
  $(this).parent().siblings().children().removeClass("show");
  if ($(this).parent().siblings().is(".has-sub")) {
    $(".submenu").slideUp("fast");
  }
});

$(".nav-item").mouseover(function () {
  $(this).css({ background: "#444" });
  $(this).mouseout(function () {
    $(this).css({ background: "none" });
  });
});

$(".submenu-item").hover(function () {
  $(this).toggleClass("onhover");
});
