/* Boton cambio de idioma */

/* Guardo en una constante el elemento con la palabra english */
const englishElement = document.getElementById("english");

/* Guardo en una constante el elemento con la palabra spanish */
const spanishElement = document.getElementById("spanish");

// seleccionando los li a modificar
const agregarli1 = document.getElementById("agregar-li-1");
const agregarli2 = document.getElementById("agregar-li-2");
//selecciono los tags "p" a modificar
const clasep = document.getElementById("clasep")
const clasep2 = document.getElementById("clasep2")
const clasep3 = document.getElementById("clasep3")
const clasep4 = document.getElementById("clasep4")
const clasep5 = document.getElementById("clasep5")

// JS con cambio de idioma
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

    // Si el idioma cambia a español
    if (language === "es") {

        // Eliminar un li
        if (agregarli1) {
            agregarli1.classList.add('d-none');
        }

        // Eliminar una clase a un li
        if (agregarli2) {
            agregarli2.classList.remove('d-none');

        }

        if (clasep) {
            clasep.classList.add('p-sub-sv2')
        }

        if (clasep2) {
            clasep2.classList.add('subtext1-s3')
        }

        if (clasep3) {
            clasep3.classList.add('subtext2-s3')
        }

        if (clasep4) {
            clasep4.classList.add('subtext3-s3')
        }

        if (clasep5) {
            clasep5.classList.add('subtext4-s3')
        }

    } else {
        agregarli1.classList.remove('d-none');
        agregarli2.classList.add('d-none');
        clasep.classList.remove('p-sub-sv2')
        clasep2.classList.remove('subtext1-s3')
        clasep3.classList.remove('subtext2-s3')
        clasep4.classList.remove('subtext3-s3')
        clasep5.classList.remove('subtext4-s3')
    }

}

/* Configurar por defecto el idioma en inglés */

document.addEventListener("DOMContentLoaded", function () {
    
    document.body.classList.add('en');
    document.body.classList.remove('es');

    document.getElementById('english').addEventListener('click', function () {
        document.body.classList.add('en');
        document.body.classList.remove('es');
        this.classList.add('active-en');
        document.getElementById('spanish').classList.remove('active-es');
    });

    document.getElementById('spanish').addEventListener('click', function () {
        document.body.classList.add('es');
        document.body.classList.remove('en');
        this.classList.add('active-es');
        document.getElementById('english').classList.remove('active-en');
    });
});

/* Cambio de idioma con click */

englishElement.addEventListener("click", () => {
    changeLanguage("en");
});

spanishElement.addEventListener("click", () => {
    changeLanguage("es");
});

/* Offset principal */

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

    /* Offset específico para about us */

    const specificLink = document.getElementById('specific-link');
    specificLink.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        let SPECIFIC_OFFSET = 0;

        /* XXL */

        if (window.innerWidth >= 1400) {
            SPECIFIC_OFFSET = 190;

        }

            /* XL */

            else if (window.innerWidth >= 1200) {
                SPECIFIC_OFFSET = 20;

            }

            /* LG */

            else if (window.innerWidth >= 992) {
                SPECIFIC_OFFSET = 35; // Offset para pantallas pequeñas
            }

            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - SPECIFIC_OFFSET;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });


    /* Offset especifico para sevicios */

    const Servicios = document.getElementById('ServicesDropdown');
    Servicios.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        let SPECIFIC_OFFSET = 0;

        /* XXL */

        if (window.innerWidth >= 1400) {
            SPECIFIC_OFFSET = 220;

        }

            /* XL */

            else if (window.innerWidth >= 1200) {
                SPECIFIC_OFFSET = 10;

            }

            /* LG */

            else if (window.innerWidth >= 992) {
                SPECIFIC_OFFSET = 35; // Offset para pantallas pequeñas
            }

            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - SPECIFIC_OFFSET;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
    });

    /* Offset especifico para our team */

    const ourteamlink = document.getElementById('ourteam-link');
    ourteamlink.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        let SPECIFIC_OFFSET = 0;

        /* XXL */

        if (window.innerWidth >= 1400) {
            SPECIFIC_OFFSET = 110;

        }

            /* XL */

            else if (window.innerWidth >= 1200) {
                SPECIFIC_OFFSET = 100;

            }

            /* LG */

            else if (window.innerWidth >= 992) {
                SPECIFIC_OFFSET = 35; // Offset para pantallas pequeñas
            }

            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - SPECIFIC_OFFSET;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });


    /* Offset especifico para contact */

    const contactlink = document.getElementById('contact-link');
    contactlink.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        let SPECIFIC_OFFSET = 0;

        /* XXL */

        if (window.innerWidth >= 1400) {
            SPECIFIC_OFFSET = 200;

        }

            /* XL */

            else if (window.innerWidth >= 1200) {
                SPECIFIC_OFFSET = 80;

            }

            /* LG */

            else if (window.innerWidth >= 992) {
                SPECIFIC_OFFSET = 35; // Offset para pantallas pequeñas
            }

            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - SPECIFIC_OFFSET;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });

});


/* Redirigir a los acorrdiones abiertos */

document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los enlaces del menú desplegable
    const dropdownLinks = document.querySelectorAll('.dropdown-item');

    // Mapa de desplazamiento específico para cada acordeón
    const offsetMap = {
        'panelsStayOpen-headingOne': -1385, // Ajusta el valor según sea necesario
        'panelsStayOpen-headingTwo': -1380, // Ajusta el valor según sea necesario
        'panelsStayOpen-headingThree': -1380, // Ajusta el valor según sea necesario
        'panelsStayOpen-headingFour': -1380 // Ajusta el valor según sea necesario
    };

    /* XXL */
    const offsetMapxxl = {
        'panelsStayOpen-headingOne': -1950, // Ajusta el valor según sea necesario
        'panelsStayOpen-headingTwo': -1850, // Ajusta el valor según sea necesario
        'panelsStayOpen-headingThree': -1780, // Ajusta el valor según sea necesario
        'panelsStayOpen-headingFour': -1680 // Ajusta el valor según sea necesario
    };

    /* XL */
    const offsetMapxl = {
        'panelsStayOpen-headingOne': -1380, // Ajusta el valor según sea necesario
        'panelsStayOpen-headingTwo': -1380, // Ajusta el valor según sea necesario
        'panelsStayOpen-headingThree': -1380, // Ajusta el valor según sea necesario
        'panelsStayOpen-headingFour': -1380 // Ajusta el valor según sea necesario
    };

    /* Podes crear otro offset map si necesitas... */

    // Función para cerrar todos los acordeones
    function closeAllAccordions() {
        const allCollapseElements = document.querySelectorAll('.accordion-collapse');
        allCollapseElements.forEach(function (collapse) {
            collapse.classList.remove('show');
        });
    }

    // Agregar un evento de clic a cada enlace del menú desplegable
    dropdownLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar la redirección automática

            const targetId = this.getAttribute('href').substring(1); // Obtener el ID del destino sin el '#'
            const targetElement = document.getElementById(targetId); // Obtener el elemento de destino



            if (window.innerWidth >= 1400) {
                // Contraer todos los elementos del acordeón
                closeAllAccordions();

                // Expandir el elemento del acordeón correspondiente
                const collapseElement = targetElement.querySelector('.accordion-collapse');
                if (collapseElement) {
                    collapseElement.classList.add('show');
                }

                // Ajustar la altura de desplazamiento específica
                const SPECIFIC_OFFSET = offsetMapxxl[targetId] || 0; // Obtén el desplazamiento específico o usa 0 si no se encuentra
                const targetOffsetTop = targetElement.offsetTop - SPECIFIC_OFFSET;

                // Desplazarse hasta la sección específica
            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth'
            });

            }

            else if (window.innerWidth >= 1200) {
                // Contraer todos los elementos del acordeón
                closeAllAccordions();

                // Expandir el elemento del acordeón correspondiente
                const collapseElement = targetElement.querySelector('.accordion-collapse');
                if (collapseElement) {
                    collapseElement.classList.add('show');
                }

                // Ajustar la altura de desplazamiento específica
                const SPECIFIC_OFFSET = offsetMapxl[targetId] || 0; // Obtén el desplazamiento específico o usa 0 si no se encuentra
                const targetOffsetTop = targetElement.offsetTop - SPECIFIC_OFFSET;

                // Desplazarse hasta la sección específica
            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth'
            });

            }

        });
    });

    // Agregar un evento de clic al enlace de "Servicios" para cerrar todos los acordeones

    const servicesNavLink = document.querySelector('#ServicesDropdown');
    if (servicesNavLink) {
        servicesNavLink.addEventListener('click', function () {
            closeAllAccordions();
        });
    }
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
                targetCollapse.addEventListener('animationend', function () {
                    targetCollapse.classList.remove("animate__animated", "animate__fadeOut");
                });
            } else {
                targetCollapse.classList.add("animate__animated", "animate__fadeIn");
                targetCollapse.addEventListener('animationend', function () {
                    targetCollapse.classList.remove("animate__animated", "animate__fadeIn");
                });
            }
        });
    });
});





