    const menuOverlay = document.querySelector('.mobilemenu');
    const openMenuBtn = document.querySelector('.mobilemenu__button--open');
    const closeMenuBtn = document.querySelector('.mobilemenu__button--close');
  
    openMenuBtn.addEventListener('click', e => {
    menuOverlay.classList.remove('d-none');
      });
      
    closeMenuBtn.addEventListener('click', e => {
    menuOverlay.classList.add('d-none');
    });
 