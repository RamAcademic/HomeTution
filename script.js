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

        const opened = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            opened ? "true" : "false"
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
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");


const activeObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                links.forEach(link => {
                    link.classList.remove("active");
                });


                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );


                if (activeLink) {
                    activeLink.classList.add("active");
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

const savedTheme = localStorage.getItem(
    "mathsmentor-theme"
);


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");


        const theme =
            document.body.classList.contains("dark")
                ? "dark"
                : "light";


        localStorage.setItem(
            "mathsmentor-theme",
            theme
        );

    });

}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealTargets = document.querySelectorAll(
    ".about-copy, " +
    ".about-right, " +
    ".subject-card, " +
    ".stat-item, " +
    ".why-list > div, " +
    ".why-visual, " +
    ".review-card, " +
    ".contact-info-card"
);


revealTargets.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    entries => {

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


revealTargets.forEach(element => {

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
   CONSOLE MESSAGE
========================================================= */

console.log(
    "MathsMentor website loaded successfully."
);

console.log(
    "Mathematics Home Tuition | Rajajinagar | Bengaluru"
);
