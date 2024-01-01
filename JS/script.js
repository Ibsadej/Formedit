const faq = document.querySelectorAll(".Faq section");
const icon = document.querySelectorAll(".icon");

icon.forEach((icon)=>{
    icon.onclick = ()=>{
        const faqSect = icon.parentElement.parentElement;
        faqSect.classList.toggle("active")
        icon.classList.toggle("active")
    }
})