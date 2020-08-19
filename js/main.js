const responsive = {
  320: {
    items: 1,
  },
  560: { items: 2 },
  960: { items: 3 },
};

$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");
  console.log("hello");
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: responsive,
  });

  $(".move-up").click(function () {
    console.log("up");
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  AOS.init();
});
