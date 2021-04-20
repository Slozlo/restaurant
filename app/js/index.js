

$more = $(".team__more");
$disabled = $(".disabled");

$more.click(function () {
  $disabled.removeClass("disabled");
});

// scroll
$(".order__scroll").on("click", function () {
  let closely = $(".closely");

  $("html, body").animate(
    {
      scrollTop: $(closely).offset().top
    },
    {
      duration: 450, 
      easing: "linear" 
    }
  );

  return false;
});
