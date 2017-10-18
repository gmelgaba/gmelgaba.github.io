$(document).ready(function () {

  function getCurrentTime() {
    var now = new Date();
    var hours   = twoDigits(now.getHours());
    var minutes = twoDigits(now.getMinutes());
    var seconds = twoDigits(now.getSeconds());

    return hours + ":" + minutes + ":" + seconds;
  }

  function twoDigits(i) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
  }

  setInterval(function() {
    $('#clocky .clock').html(getCurrentTime())
  }, 1000);

  $("#switch").click(function () {
    var $fullPage = $('#full-page');
    var $switch   = $('#switch');
    if ($fullPage.hasClass('night')) {
      $fullPage.removeClass('night');
      $switch.removeClass('switched');
    } else {
      $fullPage.addClass('night');
      $switch.addClass('switched');
    }
  });

  // $('#clocky .clock').each(function () {
  //   $(this).show();
  //   $(this).html($(this).text().replace(/([^\x00-\x80]|\w:)/g, "<span class='letter'>$&</span>"));
  // });

  // anime
  //   .timeline({
  //     loop: false
  //   }).add({
  //     targets: '#clocky .clock',
  //     scale: [0, 1],
  //     duration: 2000,
  //     elasticity: 600,
  //     delay: function (el, i) {
  //       return 45 * (i + 1)
  //     }
  //   });

});
