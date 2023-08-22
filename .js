$(document).ready(function () {
  // Add a smooth scroll to the links in the header
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    );
  });
});
