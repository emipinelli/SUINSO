/* Boton cambio de idioma */

/* Guardo en una constante el elemento con la palabra english */
const englishElement = document.getElementById("english");

/* Guardo en una constante el elemento con la palabra spanish */
const spanishElement = document.getElementById("spanish");

/* Sincronizo el archivo json con el lenguaje correspondiente */
const changeLanguage = async (language) => {
    const requestJson = await fetch(`./idiomas/${language}.json`);
    const texts = await requestJson.json();

    // Actualizo el contenido de la página con los textos del JSON
    document.querySelectorAll("[data-section]").forEach(element => {
        const section = element.getAttribute("data-section");
        const value = element.getAttribute("data-value");
        element.innerHTML = texts[section][value];
    });

    // Cambio las clases para resaltar el idioma activo
    englishElement.classList.toggle("active-en", language === "en");
    spanishElement.classList.toggle("active-es", language === "es");

    // Cambia las clases de los elementos del navbar según el idioma
    const navItems = document.querySelectorAll(".nav-link");
    const imgNav = document.getElementById("img-nav");
    const navSwitch = document.getElementById("switch-div");

}

document.addEventListener("DOMContentLoaded", function() {
    // Configurar por defecto en inglés
    document.body.classList.add('en');
    document.body.classList.remove('es');

    document.getElementById('english').addEventListener('click', function() {
        document.body.classList.add('en');
        document.body.classList.remove('es');
        this.classList.add('active-en');
        document.getElementById('spanish').classList.remove('active-es');
    });

    document.getElementById('spanish').addEventListener('click', function() {
        document.body.classList.add('es');
        document.body.classList.remove('en');
        this.classList.add('active-es');
        document.getElementById('english').classList.remove('active-en');
    });
});


englishElement.addEventListener("click", () => {
    changeLanguage("en");
});

spanishElement.addEventListener("click", () => {
    changeLanguage("es");
});

/* Redireccion mas arriba */

document.addEventListener('DOMContentLoaded', () => {
    const OFFSET = 87; // Ajusta este valor para cambiar el desplazamiento

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - OFFSET;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Offset específico para el enlace con id 'specific-link'
    const specificLink = document.getElementById('specific-link');
    specificLink.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const SPECIFIC_OFFSET = 50; // Offset específico para la sección 2
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - SPECIFIC_OFFSET;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* Menu servicios */

document.addEventListener('DOMContentLoaded', () => {
    const contentDisplay = document.getElementById('contentDisplay');

    document.querySelectorAll('.menu a').forEach(menuItem => {
        menuItem.addEventListener('click', async (event) => {
            event.preventDefault();
            const service = event.target.getAttribute('data-service');
            const response = await fetch(`./servicios/${service}.html`);
            const content = await response.text();
            contentDisplay.innerHTML = content;
        });
    });
});

/* Desaparecer logo SUINSO */

const imgDnone = document.getElementById("img-d-none");

document.querySelectorAll('.menu a').forEach(menuItem => {
    menuItem.addEventListener('click', async (event) => {
        imgDnone.style.display = "none";
    });
});

/* Animacion accordiones */

document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");
  
    accordionButtons.forEach(button => {
      button.addEventListener("click", function () {
        const targetCollapse = document.querySelector(this.getAttribute("data-bs-target"));
  
        // Si el acordeón está abierto
        if (targetCollapse.classList.contains("show")) {
          targetCollapse.classList.add("animate__animated", "animate__fadeOut");
          targetCollapse.addEventListener('animationend', function() {
            targetCollapse.classList.remove("animate__animated", "animate__fadeOut");
          });
        } else {
          targetCollapse.classList.add("animate__animated", "animate__fadeIn");
          targetCollapse.addEventListener('animationend', function() {
            targetCollapse.classList.remove("animate__animated", "animate__fadeIn");
          });
        }
      });
    });
  });
