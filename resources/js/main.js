$(document).ready(function () {
  $('.button-collapse').sideNav();
});

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 0) {
    $("#navi").addClass('navbar-fixed');
  } else {
    $("#navi").removeClass('navbar-fixed');
  }
});
