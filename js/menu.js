(() => {
    const refs = {
      openModalBtn: document.querySelector('[mobile-menu-open]'),
      closeModalBtn: document.querySelector('[mobile-menu-close]'),
      modal: document.querySelector('[data-modal-menu]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-open');
    }
  })();