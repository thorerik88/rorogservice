const hamburger = document.querySelector(".nav__wrapper__mobile-menu");
const hamburgerIcon = document.querySelector(".fas.fa-bars")
const mobileMenu = document.querySelector(".dropdown")

hamburger.addEventListener("click", (e) => {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        hamburgerIcon.className = "fas fa-bars";

    } else {
        mobileMenu.style.display = "block";
        hamburgerIcon.className = "fas fa-times";

        mobileMenu.addEventListener("click", () => {
            mobileMenu.style.display = "none";
            hamburgerIcon.className = "fas fa-bars";
        })
    }
})


const proteq = document.querySelector(".footer__proteq p");
const d = new Date();
let thisYear = d.getFullYear();
proteq.innerHTML = `&#0169; ${thisYear} Created by Proteq`;

// render responsive images

window.addEventListener("resize", () => {
    reSize()    
})

window.onload = reSize();

function reSize() {
    const jacuzziImg = document.querySelector(".jacuzzi__img img");
    let screenWidth = screen.width;
    if (screen.width >= 769) {
        jacuzziImg.src = "./assets/jacuzzi_lg_900.jpg";
    } else {
        jacuzziImg.src = "./assets/jacuzzi_lg_1200.jpg";
    }
    
}
// reSize();
