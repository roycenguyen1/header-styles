$(".nav-link").click(function () {
  if ($(this).parent().is(".has-sub")) {
    $(this).toggleClass("show");
  } else {
    $(this).addClass("show");
  }

  $(this).parent().siblings().children().removeClass("show");
  if ($(this).parent().siblings().is(".has-sub")) {
    $(".submenu").slideUp("fast");
  }
});

$(".has-sub").click(function () {
  $(".submenu").slideToggle("fast");
  $(".submenu-item").click(function () {
    if ($(".nav-link").hasClass("show")) {
      $(".nav-link").removeClass("show");
    }
  });
});

$(".hamburger").click(function () {
  $(".header").toggleClass("active");
  $(this).toggleClass("active");
});
