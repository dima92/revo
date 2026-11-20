import "../styles/main.scss";

import { initBurger } from "./burger";
import { initCoffeeSlider, initComboSlider } from "./slider";
import { initGiftsetTabs } from "./tabs";
import { initHeroVideo } from "./video";

document.addEventListener("DOMContentLoaded", () => {
  initBurger();
  initHeroVideo();
  initCoffeeSlider();
  initComboSlider();
  initGiftsetTabs();
});
