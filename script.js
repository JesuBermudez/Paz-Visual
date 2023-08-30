// Maneja el evento de desplazamiento (scroll)
window.addEventListener('scroll', () => {
    // Verifica la posición vertical de la página
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        // Agrega una clase al nav para cambiar su estilo
        navbar.classList.add('scrolled');
    } else {
        // Elimina la clase si se encuentra en la parte superior de la página
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const div1 = document.querySelector('.menu');
    const div2 = document.querySelector('.menu-options');
    const header = document.querySelector("header");
    const exit = document.querySelector(".exit");
    const links = document.querySelectorAll('.menu-options a');

    div1.addEventListener('click', function () {
        div2.style.display = 'flex';
        div1.style.width = "0";
        header.style.display = "none";
    });

    links.forEach(function(link) {
        link.addEventListener('click', function () {
            div2.style.display = 'none';
            div1.style.width = "6vw";
            header.style.display = "flex";
        });
    });

    exit.addEventListener('click', function () {
        div2.style.display = 'none';
        div1.style.width = "6vw";
        header.style.display = "flex";
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    var img = document.createElement('img');
    var caption = document.createElement('p');
    caption.className = 'caption';
  
    // Agregar la imagen y la descripción al lightbox
    lightbox.appendChild(img);
    lightbox.appendChild(caption);
  
    // Agregar el lightbox al documento
    document.body.appendChild(lightbox);
  
    var galleryImages = document.querySelectorAll('.lightbox-gallery img');
    galleryImages.forEach(function(image) {
      image.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Obtener la URL de la imagen y la descripción
        var src = this.getAttribute('data-image-hd');
        var cap = this.getAttribute('alt');
  
        // Agregar los datos al lightbox
        img.src = src;
        caption.textContent = cap;
  
        // Mostrar el lightbox
        lightbox.style.display = 'flex';
        lightbox.style.flexDirection = 'column';
        lightbox.style.justifyContent = 'center';
  
        lightbox.addEventListener('click', function() {
          // Ocultar el lightbox al hacer clic en él
          lightbox.style.display = 'none';
        });
      });
    });
  });