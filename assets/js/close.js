$(document).ready(function() {
  $('.portfolio-modal').on('hidden.bs.modal', function () {
    var iframe = $(this).find('iframe');
    if (iframe.length) {
      var src = iframe.attr('src');
      iframe.attr('src', '');
      iframe.attr('src', src);
    }
  });

  $('.social-buttons a').on('mousedown click', function () {
    var el = this;
    setTimeout(function () { el.blur(); }, 0);
  });

  $(window).on('focus', function () {
    var el = document.activeElement;
    if (el && el.matches && el.matches('.social-buttons a')) el.blur();
  });
});