$(document).ready(function () {
  // alert("!")
  $('.anime-text .letters').each(function () {
    $(this).show();
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w|'|,)/g, "<span class='letter'>$&</span>"));
  });
  anime
    .timeline({
      loop: false
    }).add({
      targets: '.anime-text .letter',
      scale: [0, 1],
      duration: 3000,
      elasticity: 600,
      delay: function (el, i) {
        return 45 * (i + 1)
      }
    });
});