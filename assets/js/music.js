document.getElementById("musicButton").addEventListener("click", function () {
  var music = document.getElementById("backgroundMusic");

  if (music.paused) {
    music.play();
    this.querySelector("i").classList.remove("fa-music");
    this.querySelector("i").classList.add("fa-volume-mute");
  } else {
    music.pause();
    this.querySelector("i").classList.remove("fa-volume-mute");
    this.querySelector("i").classList.add("fa-music");
  }
});
