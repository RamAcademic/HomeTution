/* =========================================================
   MATHSMENTOR JAVASCRIPT
   Desktop + Mobile
   Dark / Light Mode
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

    if (!navbar) return;

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


if ("IntersectionObserver" in window) {

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

}


/* =========================================================
   DARK / LIGHT MODE
   SINGLE THEME SYSTEM
========================================================= */

const THEME_KEY = "mathsMentorTheme";

function applyTheme(theme) {

    const isLight = theme === "light";

    // Main theme attribute used by CSS
    document.documentElement.setAttribute(
        "data-theme",
        isLight ? "light" : "dark"
    );


    // Keep body class clean for compatibility
    document.body.classList.toggle("light", isLight);
    document.body.classList.toggle("dark", !isLight);


    // Update toggle accessibility
    if (themeToggle) {

        themeToggle.setAttribute(
            "aria-pressed",
            String(isLight)
        );

        themeToggle.setAttribute(
            "aria-label",
            isLight
                ? "Switch to dark mode"
                : "Switch to light mode"
        );

        themeToggle.setAttribute(
            "title",
            isLight
                ? "Switch to dark mode"
                : "Switch to light mode"
        );

    }

}


/*
   Read saved theme.

   Default = DARK MODE
*/

const savedTheme = localStorage.getItem(THEME_KEY);

const initialTheme =
    savedTheme === "light"
        ? "light"
        : "dark";


applyTheme(initialTheme);


/* =========================================================
   THEME TOGGLE BUTTON
========================================================= */

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute("data-theme") ||
            "dark";


        const nextTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";


        // Save selected theme
        localStorage.setItem(
            THEME_KEY,
            nextTheme
        );


        // Apply selected theme
        applyTheme(nextTheme);

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


if ("IntersectionObserver" in window) {

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

} else {

    // Fallback for older browsers

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


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
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
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
