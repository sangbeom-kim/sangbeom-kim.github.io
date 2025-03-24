$(document).ready(function() {
  $('.portfolio-modal').on('hidden.bs.modal', function () {
    var video = $(this).find('video')[0];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});