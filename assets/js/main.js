/* ========================= mixitup filter portfolio ============================ */
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*==== link active work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

/* ===================== portfolio popup ============================= */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open")
}

document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/* ================= Scroll Reveal ======================== */
const scrollRevealOption = {
    origin:"bottom",
    distance:"50px",
    duration: 1200,
};

ScrollReveal().reveal(".home__img-wrapper", {
   ...scrollRevealOption,
   origin:"right",
});

ScrollReveal().reveal(".home__small", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".home__title", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".home__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".home__btns", {
    ...scrollRevealOption,
    delay: 1800,
});

ScrollReveal().reveal(".section__title", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about__img-wrapper", {
    ...scrollRevealOption,
    origin:"left",
 });

 ScrollReveal().reveal(".about__content", {
    ...scrollRevealOption,
    delay: 500,
});

 ScrollReveal().reveal(".resume__container", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".services__container", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".skills__container", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".work__container", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".testimonials__container", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".contact__container", {
    ...scrollRevealOption,
    delay: 500,
});






