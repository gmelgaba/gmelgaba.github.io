$(document).ready(function () {
  const today = new Date()
  $('.experience-years').text(today.getUTCFullYear() - 2012);
  $('.parallax').parallax();
  $('.ml9 .letters-mobile').each(function () {
    $(this).show();
    $(this).html($(this).text().replace(/(\w+|'|,)/g, "<span class='letter'>$&</span>"));
  });
  $('.ml9 .letters').each(function () {
    $(this).show();
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w|'|,)/g, "<span class='letter'>$&</span>"));
  });
  anime
    .timeline({
      loop: false
    }).add({
      targets: '.ml9 .letter',
      scale: [0, 1],
      duration: 2000,
      elasticity: 600,
      delay: function (el, i) {
        return 45 * (i + 1)
      }
    });
});
