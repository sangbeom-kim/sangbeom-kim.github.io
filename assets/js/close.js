$(document).ready(function () {
  $('.portfolio-modal').on('shown.bs.modal', function () {
    var video = $(this).find('video').get(0);
    var source = $(this).find('source').get(0);
    if (!video || !source) return;

    if (!source.src) {
      source.src = source.dataset.src;
      video.load();
    }
  });

  $('.portfolio-modal').on('hidden.bs.modal', function () {
    var video = $(this).find('video').get(0);
    if (video) {
      video.pause();
      video.currentTime = 0;

      $(video).find('source').each(function () {
        this.removeAttribute('src');
      });
      video.load();
    }
  });

  function resetSocialStates() {
    $('.social-buttons a').blur();

    document.body.classList.add('tab-switch-reset');

    requestAnimationFrame(function () {
      document.body.classList.remove('tab-switch-reset');
    });
  }

  document.addEventListener('visibilitychange', function () {
    resetSocialStates();
  });

  window.addEventListener('focus', resetSocialStates);
  window.addEventListener('blur', resetSocialStates);
});