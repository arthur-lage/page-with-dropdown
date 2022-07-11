const dropdownLinksDesktop = document.querySelectorAll(
  ".nav-list:not(.mobile) .nav-link.has-dropdown"
);

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list.mobile");
const mobileMenuLinks = document.querySelectorAll(
  ".nav-list.mobile .nav-link.has-accordion"
);

dropdownLinksDesktop.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("show")) {
      clearShowClasses(dropdownLinksDesktop);
    } else {
      clearShowClasses(dropdownLinksDesktop);
      link.classList.add("show");
    }
  });
});

function clearShowClasses(objectToRemoveClass) {
  objectToRemoveClass.forEach((link) => {
    link.classList.remove("show");
  });
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");

  if (hamburger.classList.contains("open")) {
    mobileMenu.classList.add("open");
    document.body.classList.add("overlay");
  } else {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("overlay");
  }
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("show")) {
      clearShowClasses(mobileMenuLinks);
    } else {
      clearShowClasses(mobileMenuLinks);
      link.classList.add("show");
    }
  });
});
