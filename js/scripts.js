$(document).ready(function() {

  // Function to reveal answer
  $(".answer").click(function() {
    var parent = $(this).parent();
    $(this).parent().addClass("hide");
    if ($(".show").parent() === parent) {
      $(".show").show();
    }
  });

  // Function to hide answer
  $(".hide-answer").click(function() {
    $(this).parents().removeClass("hide");
  });
});
