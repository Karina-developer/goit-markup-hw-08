
  (() => {
    const menuBtnRef = document.querySelector("[mobile-menu-open]");
    const mobileMenuRef = document.querySelector("[data-modal-menu]");
    const mobileBtnClose = document.querySelector("[mobile-menu-close]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  
    mobileBtnClose.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  })();