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

    // Cambio el atributo data-language para el próximo cambio
    // switchElement.setAttribute("data-language", language === "en" ? "es" : "en");

    // Cambia las clases de los elementos del navbar según el idioma
    const navItems = document.querySelectorAll(".nav-link");
    const imgNav = document.getElementById("img-nav");
    const navSwitch = document.getElementById("switch-div");

    navItems.forEach(item => {

        if (language === "es") {
            item.classList.remove("nav-text1","nav-text2","nav-text3","nav-text4","nav-text5");
            item.classList.add("nav-text1-es","nav-text2-es","nav-text3-es","nav-text4-es","nav-text5-es");
        } else {
            item.classList.remove("nav-text1-es","nav-text2-es","nav-text3-es","nav-text4-es","nav-text5-es");
            item.classList.add("nav-text1","nav-text2","nav-text3","nav-text4","nav-text5");
        }
    });

        if(language === "es"){
            imgNav.classList.remove("img-nav");
            imgNav.classList.add("img-nav-es");
        } else{
            imgNav.classList.remove("img-nav-es");
            imgNav.classList.add("img-nav")
        }

        if(language === "es"){
            navSwitch.classList.remove("switch-l");
            navSwitch.classList.add("switch-l-es");
        } else{
            navSwitch.classList.remove("switch-l-es");
            navSwitch.classList.add("switch-l")
        }
};

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