$(document).ready(function() {
  $('.portfolio-modal').on('hidden.bs.modal', function () {
    var iframe = $(this).find('iframe');
    if (iframe.length) {
      var src = iframe.attr('src');
      iframe.attr('src', '');
      iframe.attr('src', src);
    }
  });
});