const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const sectionTop = section.offsetTop - 300;

if(window.scrollY >= sectionTop){
section.classList.add("show");
}

});

});

const cards = document.querySelectorAll(".film-card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transform = "scale(1.03)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "scale(1)";
});

});

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    successMessage.innerHTML = "Thank you for contacting RKM Production. We have received your message and will get back to you soon.";

    successMessage.classList.add("show");

    successMessage.style.color = "#C1121F";
    successMessage.style.marginTop = "15px";
    successMessage.style.fontWeight = "600";

    contactForm.reset();

});