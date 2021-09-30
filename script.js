const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section-1");
const nav = document.querySelector(".nav");

// Set date
date.innerHTML = new Date().getFullYear();

// Add sticky navbar
window.addEventListener('scroll', function() {
    if(window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
        navBtn.style.color = "rgb(211, 19, 115)";
    } else {
        navbar.classList.remove("navbar-fixed");
        navBtn.style.color = "black";
    }
});

// Show sidebar
navBtn.addEventListener("click", function() {
    sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove("show-sidebar");
});

// Button scrolling
btnScrollTo.addEventListener("click", function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

    console.log(
        "height/width viewport",
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
document.querySelector(".nav-links").addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("nav-link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});

/*document.querySelector(".footer-links").addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("footer-link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});*/

/*const footerLinks = document.querySelector(".footer-links");

function scrollFooter() {
    for(let item in footerLinks) {
        let myNav = document.querySelector(".footer-link");
        myNav.addEventListener("click", function() {
            item.scrollIntoView({ behavior: "smooth" });
        })
    }
}
scrollFooter();*/

document.querySelector(".sidebar-links").addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("sidebar-link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
        sidebar.classList.remove("show-sidebar");
    }
});

// Menu fade animation
const handleHover = function (e) {
    if (e.target.classList.contains("nav-link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav-link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
        if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Reveal sections
/*const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section-hidden");
});*/

// Loading images 
/*const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));*/

// When user clicks on the button, scroll to the top of the document
const btnTop = document.querySelector(".btn-top");

function scrollFunction() {
    if(
        document.body.scrollTop > 850 || 
        document.documentElement.scrollTop > 850) {
        btnTop.style.display = 'block';
        btnTop.innerHTML = "back to top";
        btnTop.style.textTransform = "capitalize";
        btnTop.style.cursor = 'pointer';
    } else {
        btnTop.style.display = 'none';
    }
}

window.onscroll = function() {
    scrollFunction();
};

const buttonTop = function() {
    btnTop.addEventListener('click', () => {
        window.scroll({ behavior: 'smooth', top: 0 });
    });
};
buttonTop();
