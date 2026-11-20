export function initHeroVideo() {
  const videoContainer = document.querySelector("[data-video-container]");
  const playBtn = document.querySelector("[data-play-btn]");
  const video = videoContainer?.querySelector("video");

  if (!videoContainer || !playBtn || !video) return;

  playBtn.addEventListener("click", async () => {
    videoContainer.classList.add("is-playing");
    video.controls = true;

    try {
      await video.play();
    } catch (error) {
      console.error("Ошибка воспроизведения:", error);
      video.muted = true;
      await video.play();
    }
  });

  video.addEventListener("ended", () => {
    videoContainer.classList.remove("is-playing");
    video.controls = false;
    video.load();
  });
}
