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
        whatsappContact.innerHTML = `<img src="whatsapp-256 (1).png" alt="WhatsApp Icon"></img>`
    } else {
        whatsappContact.innerHTML = `<img src="whatsapp-256 (1).png" alt="WhatsApp Icon">WhatsApp İletişim Hattı`
    }
}

// Pop-up
const moreButton1 = document.querySelector(".open-button-st")
const moreButton2 = document.querySelector(".open-button-nd")
const moreButton3 = document.querySelector(".open-button-rd")
