// Hamburger toggle
    const ham = document.querySelector('.ham-menu');
    const menu = document.querySelector('.off-screen-menu');
    ham.addEventListener('click', () => {
      ham.classList.toggle('active');
      menu.classList.toggle('active');
    });

    document.querySelectorAll('.off-screen-menu a').forEach(link => {
      link.addEventListener('click', () => {
        ham.classList.remove('active');
        menu.classList.remove('active');
      });
    });