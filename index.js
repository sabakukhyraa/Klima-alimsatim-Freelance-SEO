// Responsive 
document.addEventListener("DOMContentLoaded", init)
const toggleMenu = document.querySelector(".toggle-menu")
const navList = document.querySelector(".nav-list")


toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active")
    navList.classList.toggle("active")
})


function init () {
    let query = window.matchMedia("(max-width: 1375px)")
    let query2 = window.matchMedia("(min-width: 750px)")

    let whatsappContact = document.getElementById("whatsapp")

    if (query.matches && query2.matches) {
        whatsappContact.innerHTML = `<img src="../images/wapp-icon.png" alt="Klima alım-satışçısı ile iletişim kurmak için Whatsapp görüşme linki"></img>`
    } else {
        whatsappContact.innerHTML = `<img src="../images/wapp-icon.png" alt="Klima alım-satışçısı ile iletişim kurmak için Whatsapp görüşme linki">WhatsApp İletişim Hattı`
    }
}

// Pop-up
const modal1 = document.getElementById("more-contact")
const modal2 = document.getElementById("more-sale")
const modal3 = document.getElementById("more-faq")

const moreButton1 = document.querySelector(".open-button-st")
const moreButton2 = document.querySelector(".open-button-nd")
const moreButton3 = document.querySelector(".open-button-rd")

const closeButton1 = document.querySelector(".close-button-st")
const closeButton2 = document.querySelector(".close-button-nd")
const closeButton3 = document.querySelector(".close-button-rd")


moreButton1.addEventListener("click", () => {
    modal1.showModal();
})
closeButton1.addEventListener("click", () => {
    modal1.close();
})


moreButton2.addEventListener("click", () => {
    modal2.showModal();
})
closeButton2.addEventListener("click", () => {
    modal2.close();
})


moreButton3.addEventListener("click", () => {
    modal3.showModal();
})
closeButton3.addEventListener("click", () => {
    modal3.close();
})