
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add("nav-white");
    } else {
      header.classList.remove("nav-white");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
