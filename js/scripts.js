$(document).ready(function () {
  $("#cbtn").click(function () {
    if ($("#cbtn").children("span").hasClass('fa-pause')) {
      $("#mycarousel").carousel('pause');
      $("#cbtn").children("span").removeClass('fa-pause');
      $("#cbtn").children("span").addClass('fa-play');
    } else if ($("#cbtn").children("span").hasClass('fa-play')) {
      $("#mycarousel").carousel('cycle');
      $("#cbtn").children("span").removeClass('fa-play');
      $("#cbtn").children("span").addClass('fa-pause');
    }
  });

  $("#loginBtn").click(function() {
    $("#loginModal").modal('show');
  });
  $("#reserveBtn").click(function() {
    $("#reserveModal").modal('show');
  });

});