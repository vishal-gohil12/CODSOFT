var typingEffect = new Typed(".typetext", {
    strings: ["Developer", "Coder"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

const src = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
});

src.reveal('.featured-name', { delay: 100 });
src.reveal(".text-info", { delay: 200 });
src.reveal(".text-btn", { delay: 200 });
src.reveal(".social-icon", { delay: 200 });
src.reveal(".image-class", { delay: 200 });

src.reveal(".project-box", { interval: 200 });

src.reveal(".top-header", {});

const srcLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
})

srcLeft.reveal(".about-info", { delay: 100 });
srcLeft.reveal(".contact-info", { delay: 100 });


const srcR = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true
})

srcR.reveal(".skills", { delay: 100 });
srcR.reveal(".skill-box", { delay: 100 });
srcR.reveal(".form-control", { delay: 100 });

