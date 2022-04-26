"use strict";

window.onload = function () {
  const parallax = document.querySelector(".parallax");
  if (parallax) {
    const content = document.querySelector(".parallax__container");
    const clouds = document.querySelector(".images-parallax__clouds");
    const mountains = document.querySelector(".images-parallax__mountains");
    const human = document.querySelector(".images-parallax__human");

    // Коэффициенты
    const forClouds = 40;
    const forMountains = 20;
    const forHuman = 10;

    // Скорость анимации
    const speed = 0.15;

    // Объявление переменных
    let positionX = 0,
      positionY = 0;
    let coordXprocent = 0,
      coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${
        positionY / forClouds
      }%)`;
      mountains.style.cssText = `transform: translate(${
        positionX / forMountains
      }%, ${positionY / forMountains}%)`;
      human.style.cssText = `transform: translate(${positionX / forHuman}%, ${
        positionY / forHuman
      }%)`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      //   Получение ширины и высоты блока
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      // Ноль по середине
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      // Получаем проценты
      coordXprocent = (coordX / parallaxWidth) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });

    // // Паралакс при скролле
    // let thresholdSets = [];
    // for (let i = 0; i < 1.0; i += 0.005) {
    //   thresholdSets.push(i);
    // }
    // const callback = function (entries, observer) {
    //   const scrollTopProcent =
    //     (window.pageYOffset / parallax.offsetHeight) * 100;
    //   setParallaxItemsStyle(scrollTopProcent);
    // };
    // const observer = new IntersectionObserver(callback, {
    //   threshold: thresholdSets,
    // });

    // observer.observe(document.querySelector(".content"));

    // function setParallaxItemsStyle(scrollTopProcent) {
    //   content.style.cssText = `transform: translate(0%, -${
    //     scrollTopProcent / 9
    //   }%)`;
    //   mountains.parentElement.style.cssText = `transform: translate(0%, -${
    //     scrollTopProcent / 6
    //   }%)`;
    //   human.parentElement.style.cssText = `transform: translate(0%, -${
    //     scrollTopProcent / 3
    //   }%)`;
    // }
  }
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute("href").substr(1);
      if (blockID == "") return false;

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};

$(window).scroll(function () {
  var offset1 = $(".content__1").offset(),
    offset2 = $(".content__2").offset(),
    offset3 = $(".content__3").offset();
  if (
    $(this).scrollTop() > offset1.top - 100 &&
    $(this).scrollTop() < offset2.top - 100
  ) {
    $(".page__slider-item").removeClass("page__slider-active");
    $(".page__slider-item")[1].classList.add("page__slider-active");
  } else if (
    $(this).scrollTop() > offset2.top - 100 &&
    $(this).scrollTop() < offset3.top - 100
  ) {
    $(".page__slider-item").removeClass("page__slider-active");
    $(".page__slider-item")[2].classList.add("page__slider-active");
  } else if ($(this).scrollTop() > offset3.top - 100) {
    $(".page__slider-item").removeClass("page__slider-active");
    $(".page__slider-item")[3].classList.add("page__slider-active");
  } else {
    $(".page__slider-item").removeClass("page__slider-active");
    $(".page__slider-item")[0].classList.add("page__slider-active");
  }
});
