const faq = document.querySelectorAll(".Faq section");
const icon = document.querySelectorAll(".icon");

icon.forEach((icon)=>{
    icon.onclick = ()=>{
        const faqSect = icon.parentElement.parentElement;
        faqSect.classList.toggle("active")
        icon.classList.toggle("active")
    }
})

const menu = document.querySelector(".menu-icon-container");
const responsivness = document.querySelector(".responsive");
const blure = document.querySelector(".side-bar-blur")

menu.onclick = ()=>{
    responsivness.classList.toggle("active");
    blure.classList.toggle("blured")
    menu.classList.toggle("active")

}

const caretBtn = document.querySelectorAll(".caret-btn");

caretBtn.forEach((caret)=>{
    const text = caret.parentElement.parentElement.parentElement;
    caret.onclick = ()=>{
        text.classList.toggle("active")
        caret.classList.toggle("clicked")
    }
})