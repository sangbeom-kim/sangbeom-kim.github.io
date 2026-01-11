$(document).ready(function() {
  $('.portfolio-modal').on('hidden.bs.modal', function () {
    var iframe = $(this).find('iframe');
    if (iframe.length) {
      var src = iframe.attr('src');
      iframe.attr('src', '');
      iframe.attr('src', src);
    }
  });

  function resetSocialStates() {
    $('.social-buttons a').blur();

    document.body.classList.add('tab-switch-reset');

    requestAnimationFrame(function() {
      document.body.classList.remove('tab-switch-reset');
    });
  }

  document.addEventListener('visibilitychange', function () {
    resetSocialStates();
  });

  window.addEventListener('focus', resetSocialStates);
  window.addEventListener('blur', resetSocialStates);
});