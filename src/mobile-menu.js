const mobileMenu = document.getElementById("mobile-menu");
const headerContainer = document.getElementById("header-container");
let isOpenned = false;
let html = document.documentElement;

mobileMenu.addEventListener("click", () => {
  isOpenned = !isOpenned;

  if(isOpenned) {
    mobileMenu.classList.add("active");
    headerContainer.classList.add("header-full");
    html.style.position = 'fixed';
    html.style.width = '100%';
    html.style.height = '100%';

  } else {
    mobileMenu.classList.remove("active");
    headerContainer.classList.remove("header-full");
    html.style.position = '';
		html.style.width = '';
		html.style.height = '';
  }
});
