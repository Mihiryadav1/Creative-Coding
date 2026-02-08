// Navbar Responsiveness
const responsiveNess = function () {
  const iconBar = document.querySelector(".icon-bar");
  const iconCross = document.querySelector(".icon-cross");
  const menuResponsive = document.querySelector(".menu-responsive");

  iconBar.addEventListener("click", () => {
    menuResponsive.style.transform = "translateX(0)";
  });
  iconCross.addEventListener("click", () => {
    menuResponsive.style.transform = "translateX(120%)";
  });
};

//Function Calls
responsiveNess();
