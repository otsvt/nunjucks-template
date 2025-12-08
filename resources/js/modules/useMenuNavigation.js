export const useMenuNavigation = () => {
  const menuButton = document.querySelector("#menu-button");
  const menuNavigation = document.querySelector("#menu-navigation-mobile");
  const menuButtonLines = menuButton.querySelectorAll("span");
  const [top, middle, bottom] = menuButtonLines;

  menuButton.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menuButton.classList.toggle("is-active");

    if (menuButton.classList.contains("is-active")) {
      top.classList.add("rotate-45", "translate-y-[7px]");
      middle.classList.add("opacity-0");
      bottom.classList.add("-rotate-45", "-translate-y-[7px]");

      menuNavigation.classList.remove("max-h-0");
      menuNavigation.classList.add("max-h-96");
    } else {
      top.classList.remove("rotate-45", "translate-y-[7px]");
      middle.classList.remove("opacity-0");
      bottom.classList.remove("-rotate-45", "-translate-y-[7px]");

      menuNavigation.classList.remove("max-h-96");
      menuNavigation.classList.add("max-h-0");
    }
  }
};
