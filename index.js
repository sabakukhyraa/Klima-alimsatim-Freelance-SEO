// Pop-up
const show = id => {
    const dialog = document.getElementById(id);
    dialog.showModal();
}


const closeDialog = id => {
    const dialog = document.getElementById(id);
    dialog.close();
}


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
        whatsappContact.innerHTML = `<img src="images/wapp-icon.png" alt="Klima alım-satışçısı ile iletişim kurmak için Whatsapp görüşme linki"></img>`
    } else {
        whatsappContact.innerHTML = `<img src="images/wapp-icon.png" alt="Klima alım-satışçısı ile iletişim kurmak için Whatsapp görüşme linki">WhatsApp İletişim Hattı`
    }
}