
const header = document.querySelector("header");
const social = document.querySelector(".social");
const navigation = document.querySelector(".navigation");
const sectionOne = document.querySelector(".home-intro");
const sectionSlider = document.querySelector(".towels-creation");

const sectionOneOptions = {
  rootMargin: "-500px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add("nav-white");
      social.classList.add("social-white")
      navigation.classList.add("white")
    } else {
      header.classList.remove("nav-white");
      social.classList.remove("social-white")
      navigation.classList.remove("white")
    }
  });
},
sectionOneOptions);

const sectionSliderOptions = {
  rootMargin: "-200px 0px -500px 0px"
};

const sectionSliderObserver = new IntersectionObserver(function(
  entries,
  sectionSliderObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add("nav-white");
      social.classList.add("social-white")
      navigation.classList.add("white")
    } else {
      header.classList.remove("nav-white");
      social.classList.remove("social-white")
      navigation.classList.remove("white")
    }
  });
},
sectionSliderOptions);

sectionOneObserver.observe(sectionOne);
sectionSliderObserver.observe(sectionSlider);
