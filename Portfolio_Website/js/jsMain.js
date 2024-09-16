// Hamburger
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

const portfolioLink = document.getElementById("ham-drop-open");
const dropdownMenu = document.getElementById("hamburger-dropdown");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

portfolioLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  dropdownMenu.classList.toggle("active");
});

// footer

gsap.from("fixed_footer", {
  y: -500,
  scrollTrigger: {
    trigger: ".content",
    start: "bottom bottom",
    scrub: true,
  },
});
