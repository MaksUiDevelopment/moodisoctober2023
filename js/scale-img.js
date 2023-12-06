window.addEventListener('resize', function () {
   var img = document.getElementById('scaleimg');
   var windowWidth = window.innerWidth;

   // Проверка ширины экрана и изменение src
   if (windowWidth <= 554) {
      img.src = '../img/logo/logo_mobile.png';
   } else if (windowWidth <= 991) {
      img.src = '../img/logo/logo-tablet.png';
   } else {
      img.src = '../img/logo/logo-desktop.png';
   }
});