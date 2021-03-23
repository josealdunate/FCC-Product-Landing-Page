const pageHeader = document.querySelector(".page-header");
const headerLogo = document.querySelector(".logo-div--small__hide");
const sectionHero = document.querySelector("#hero");

const sectionHeroOptions = {
    rootMargin: "-300px 0px 0px 0px"
};

const sectionHeroObserver = new IntersectionObserver
(function(
    entries, 
    sectionHeroObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            pageHeader.classList.add("page-header--background");
            headerLogo.classList.add("logo-div--small__show");
        } else {
            pageHeader.classList.remove("page-header--background");
            headerLogo.classList.remove("logo-div--small__show");
        }
    });
}, 
sectionHeroOptions);

sectionHeroObserver.observe(sectionHero);