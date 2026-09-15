/* =========================================================
   MATHSMENTOR JAVASCRIPT
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");
const themeToggle = document.getElementById("themeToggle");
const year = document.getElementById("year");


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 15) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");


const activeObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navItems.forEach(item => {
                    item.classList.remove("active");
                });


                const activeItem = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );


                if (activeItem) {
                    activeItem.classList.add("active");
                }

            }

        });

    },
    {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0
    }
);


sections.forEach(section => {
    activeObserver.observe(section);
});


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const savedTheme =
    localStorage.getItem("mathsmentor-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");


        const currentTheme =
            document.body.classList.contains("dark")
                ? "dark"
                : "light";


        localStorage.setItem(
            "mathsmentor-theme",
            currentTheme
        );

    });

}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".about-copy, " +
    ".about-right, " +
    ".subject-card, " +
    ".stat-item, " +
    ".why-list > div, " +
    ".why-visual, " +
    ".review-card, " +
    ".contact-info-card"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   AUTOMATIC COPYRIGHT YEAR
========================================================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SMOOTH CONTACT BUTTON
========================================================= */

document.querySelectorAll(
    'a[href="#contact"]'
).forEach(button => {

    button.addEventListener("click", () => {

        const contact =
            document.getElementById("contact");


        if (contact) {

            setTimeout(() => {

                contact.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 20);

        }

    });

});


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    if (
        navLinks &&
        menuToggle &&
        navLinks.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


/* =========================================================
   ESC KEY CLOSES MOBILE MENU
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (navLinks) {
            navLinks.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    }

});


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "MathsMentor website loaded successfully."
);

console.log(
    "Mathematics Home Tuition | Rajajinagar | Bengaluru"
);
