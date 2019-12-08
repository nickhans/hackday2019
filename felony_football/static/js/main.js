$(document).ready(function() {
  $(".user-list").click(function() {
    var name = $(this).text();
    $(".title").html(name);
    $(".card").css("opacity", "100");
  });
});
