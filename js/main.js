var users = {
  "Jacob": "Broncos",
  "Adam": "Cowboys",
  "Nick": "49ers",
  "Jake": "Ravens"
};

$(document).ready(function() {

  for(key in users){
    $(".menu-list").append("<li><a class=\"user-list\" href=\"#\" id=\"usr\">" + key + "</a></li>");
  }
  $(".user-list").click(function() {
    var name = $(this).text();
    $(".title").html(name);
    $(".card").css("opacity","100");
  });
});
