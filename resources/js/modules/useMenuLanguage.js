export const useMenuLanguage = () => {
  const roots = document.querySelectorAll("[data-menu-language-root]");

  roots.forEach((root) => {
    const menuButton = root.querySelector("[data-menu-language-button]");
    const menuList = root.querySelector("[data-menu-language-list]");
    const menuIcon = root.querySelector("[data-menu-language-icon]");
    const menuText = root.querySelector("[data-menu-language-text]");
    const menuIconWrapper = root.querySelector("[data-menu-language-icon-wrapper]");

    menuButton.addEventListener("click", toggleMenu);

    function toggleMenu() {
      menuButton.classList.toggle("is-active");

      if (menuButton.classList.contains("is-active")) {
        menuList.classList.remove("opacity-0", "pointer-events-none");
        menuList.classList.add("opacity-100", "pointer-events-auto");
        menuIcon.classList.add("rotate-180");
        menuText.classList.remove("text-accent");
        menuText.classList.add("text-accent-active");
        menuIconWrapper.classList.remove("bg-accent");
        menuIconWrapper.classList.add("bg-accent-active");
      } else {
        menuList.classList.remove("opacity-100", "pointer-events-auto");
        menuList.classList.add("opacity-0", "pointer-events-none");
        menuIcon.classList.remove("rotate-180");
        menuText.classList.remove("text-accent-active");
        menuText.classList.add("text-accent");
        menuIconWrapper.classList.remove("bg-accent-active");
        menuIconWrapper.classList.add("bg-accent");
      }
    }
  });
};
