document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");
    const playButton = document.querySelector(".play-button");

    var playButtonImg = document.querySelector(".play-button img");
    const playButtonText = document.querySelector(".play-button span");

    const elements = document.querySelectorAll('.openPopupButton');
    const closePopupButton = document.getElementById("closePopupButton");
    const popupContainer = document.getElementById("popupContainer");
    var imgElement = document.getElementById("popupImage");


    playButton.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playButtonText.textContent = "PAUSE VIDEO";
            playButtonImg.src = `./assets/img/pause.png`;
        } else {
            video.pause();
            playButtonText.textContent = "PLAY VIDEO";
            playButtonImg.src = `./assets/img/play.png`;
        }
    });

    video.addEventListener('play', function() {
        playButtonText.textContent = "PAUSE VIDEO";
        playButtonImg.src = `./assets/img/pause.png`;
    });
      
    video.addEventListener('pause', function() {
        playButtonText.textContent = "PLAY VIDEO";
        playButtonImg.src = `./assets/img/play.png`;
    });

    function myEventHandler(event) {
        popupContainer.style.display = "block";
        imgElement.src = `./assets/img/${event.target.id}.png`;
        console.log('Event occurred on an element:', event.target);
    }
  
    for (const element of elements) {
        element.addEventListener('click', myEventHandler);
    }
    
    closePopupButton.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });

    popupContainer.addEventListener("click", (e) => {
        if (e.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    });
});