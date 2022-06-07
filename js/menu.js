(() => {
    const refs = {
      openMenuBtn: document.querySelector(".menu_open_btn"),
      closeMenuBtn: document.querySelector(".mob_menu__close_btn"),
      menu: document.querySelector(".mob_menu"),
      body: document.querySelector('body'),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is_hidden");
      refs.body.classList.toggle("no_scroll");
    }
  })()