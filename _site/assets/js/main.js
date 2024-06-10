document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll('.video');

  videos.forEach(function (video) {
      var src = video.dataset.src;

      video.addEventListener('mouseenter', function () {
          video.load(); // Load metadata
          video.play();
      });

      video.addEventListener('mouseleave', function () {
          video.pause();
          video.currentTime = 0;
      });
  });
});





$(document).ready(function(){
    $('.banner-slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: true,
      adaptiveHeight: true,
      lazyLoad: true,
      
      // Additional options can be added here
    });
  });






  document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-button');
  
    playButtons.forEach(button => {
      button.addEventListener('click', function() {
        const videoContainer = this.closest('.slide');
        const video = videoContainer.querySelector('.slide-video');
  
        // Clone the video element for full-screen playback
        const fullscreenVideo = video.cloneNode(true);
        fullscreenVideo.classList.add('fullscreen-video');
  
        // Append the cloned video to the body
        document.body.appendChild(fullscreenVideo);
  
        // Play the video in full screen
        if (fullscreenVideo.requestFullscreen) {
          fullscreenVideo.requestFullscreen();
        } else if (fullscreenVideo.mozRequestFullScreen) { // Firefox
          fullscreenVideo.mozRequestFullScreen();
        } else if (fullscreenVideo.webkitRequestFullscreen) { // Chrome, Safari and Opera
          fullscreenVideo.webkitRequestFullscreen();
        } else if (fullscreenVideo.msRequestFullscreen) { // IE/Edge
          fullscreenVideo.msRequestFullscreen();
        }
  
        fullscreenVideo.play();
  
        // Remove the full-screen video element when exiting full screen
        fullscreenVideo.addEventListener('fullscreenchange', function() {
          if (!document.fullscreenElement) {
            fullscreenVideo.pause();
            fullscreenVideo.remove();
          }
        });
  
        fullscreenVideo.addEventListener('mozfullscreenchange', function() {
          if (!document.mozFullScreenElement) {
            fullscreenVideo.pause();
            fullscreenVideo.remove();
          }
        });
  
        fullscreenVideo.addEventListener('webkitfullscreenchange', function() {
          if (!document.webkitFullscreenElement) {
            fullscreenVideo.pause();
            fullscreenVideo.remove();
          }
        });
  
        fullscreenVideo.addEventListener('msfullscreenchange', function() {
          if (!document.msFullscreenElement) {
            fullscreenVideo.pause();
            fullscreenVideo.remove();
          }
        });
      });
    });
  });
  