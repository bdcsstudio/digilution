// Add class when cursor hovers over link
$("a").on("mouseenter", function () {
  $("[cursor-element='true']").addClass("cursor-hover");
});

$("a").on("mouseleave", function () {
  $("[cursor-element='true']").removeClass("cursor-hover");
});

// Add class when cursor is pressed
$("body").on("mousedown", function () {
  $("[cursor-element='true']").addClass("cursor-pressed");
});

$("body").on("mouseup", function () {
  $("[cursor-element='true']").removeClass("cursor-pressed");
});

// Add color class when cursor needs to be dark
$("[cursor-trigger-color='dark']").on("mouseenter", function () {
  $("[cursor-color='true']").addClass("cursor-color-dark");
});

$("[cursor-trigger-color='dark']").on("mouseleave", function () {
  $("[cursor-color='true']").removeClass("cursor-color-dark");
});
