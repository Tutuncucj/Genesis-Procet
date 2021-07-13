// Responsive Nav Menu 

const navMenu = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navList = document.querySelector(".nav-list");

    navbarToggler.addEventListener("click", () => {
        navbarToggler.classList.toggle("toggle");   
        navList.classList.toggle("nav-active");
    })
}

navMenu();

// Services Slider 

const serviceChange = () => {
    let firstChild, lastChild;
    const arrowLeft = document.querySelector("#arrow-left")
    const arrowRight = document.querySelector("#arrow-right")
    const servicesALL = document.querySelector("#services-slider")

    document.addEventListener("click", () => {
        if (event.target === arrowLeft){
            lastChild = servicesALL.lastElementChild;
            servicesALL.insertAdjacentElement("afterbegin", lastChild)
        }
        else if (event.target === arrowRight) {
            firstChild = servicesALL.firstElementChild;
            servicesALL.insertAdjacentElement("beforeend", firstChild)
        }

    })
}

serviceChange();


// Scroll Reveal Animations Js */

ScrollReveal().reveal('.ani-left', {
    origin: "left",
    distance: "10rem",
    duration: 1000,
    easing: "ease-in"
});

ScrollReveal().reveal('.ani-right', {
    origin: "right",
    distance: "10rem",
    duration: 1000,
    easing: "ease-in"
});

ScrollReveal().reveal('.ani-bottom', {
    origin: "bottom",
    distance: "10rem",
    duration: 1000,
    easing: "ease-in" 
});

ScrollReveal().reveal('.ani-fade-up', {
    opacity: 0,
    easing: "ease-in"
});

ScrollReveal().reveal('.ani-delay', {
    delay: 500 
});

ScrollReveal().reveal('.ani-delay-2', {
    delay: 1000 
});


