```javascript
/* =========================================================
   MATHSMENTOR - JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* =========================================================
   AUTOMATIC COPYRIGHT YEAR
========================================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   HEADER SHADOW WHEN SCROLLING
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(15, 23, 42, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".about-card, .class-card, .feature, .stats-card, .contact-box"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   PREVENT EMPTY WHATSAPP LINK
========================================================= */

const whatsappButton = document.querySelector(".btn-whatsapp");

if (whatsappButton) {

    whatsappButton.addEventListener("click", (event) => {

        const whatsappURL = whatsappButton.getAttribute("href");

        if (whatsappURL === "https://wa.me/") {

            event.preventDefault();

            alert(
                "Please add your WhatsApp number to the website first."
            );

        }

    });

}


/* =========================================================
   BUTTON CLICK EFFECT
========================================================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mousedown", () => {
        button.style.transform = "scale(0.97)";
    });

    button.addEventListener("mouseup", () => {
        button.style.transform = "";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "";
    });

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "📐 MathsMentor website loaded successfully!"
);

console.log(
    "Mathematics Home Tuition | Rajajinagar | Bengaluru"
);
```

