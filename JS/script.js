const faq = document.querySelectorAll(".Faq section");
const icon = document.querySelectorAll(".icon");

icon.forEach((icon)=>{
    icon.onclick = ()=>{
        const faqSect = icon.parentElement.parentElement;
        faqSect.classList.toggle("active")
        icon.classList.toggle("active")
    }
})

const menu = document.querySelector(".menu");
const menu1 = document.querySelector(".menu1");
const responsivness = document.querySelector(".responsive");
const blure = document.querySelector(".side-bar-blur")

menu.onclick = ()=>{
    responsivness.classList.toggle("active");
    blure.classList.toggle("blured")
}
menu1.onclick = ()=>{
    responsivness.classList.toggle("active");
    blure.classList.toggle("blured")
}