(() => {
  const refs = {
   
    openModalBtn: document.querySelector('[data-menu-open]'),

    closeModalBtn: document.querySelector('[data-menu-close]'),
   
    modal: document.querySelector('[data-menu]'),
  };

 
  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener('click', openModal);
    refs.closeModalBtn.addEventListener('click', closeModal);
    
  
    refs.modal.addEventListener('click', onBackdropClick);
    

    document.addEventListener('keydown', onEscapePress);
  }

  function openModal() {
    refs.modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    refs.modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function onBackdropClick(event) {

    if (event.target === refs.modal) {
      closeModal();
    }
  }

  function onEscapePress(event) {
    if (event.code === 'Escape' && refs.modal.classList.contains('is-open')) {
      closeModal();
    }
  }
})();