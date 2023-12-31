document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('active');
    const submenu = document.querySelector('.submenu');
  
    nav.classList.toggle('active');
    submenu.style.display = 'none'; // Hide sub-menu when toggling the main menu
  
    // Toggle the display of sub-menu
    document.querySelector('.has-submenu').addEventListener('click', function (event) {
      event.preventDefault();
      submenu.style.display = (submenu.style.display === 'block' ? 'none' : 'block');
    });
  });
  
  
  