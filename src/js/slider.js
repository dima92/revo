import Swiper from "swiper";
import { Navigation, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

export const initCoffeeSlider = () => {
  const sliderEl = document.querySelector("[data-coffee-slider]");
  if (!sliderEl) return;

  new Swiper(sliderEl, {
    modules: [Navigation, Grid],
    slidesPerView: 1,
    spaceBetween: 20,
    grid: {
      rows: 1,
      fill: "row",
    },
    navigation: {
      nextEl: "[data-coffee-next]",
    },
    breakpoints: {
      769: {
        slidesPerView: 2.2,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: "column",
        },
      },
    },
  });
};

export const initComboSlider = () => {
  const sliderEl = document.querySelector("[data-combo-slider]");
  if (!sliderEl) return;

  new Swiper(sliderEl, {
    modules: [Navigation],
    slidesPerView: 1.15,
    spaceBetween: 20,
    navigation: {
      nextEl: "[data-combo-next]",
    },
    breakpoints: {
      577: {
        slidesPerView: 2.15,
        spaceBetween: 24,
      },
      993: {
        slidesPerView: 3.25,
        spaceBetween: 30,
      },
    },
  });
};
