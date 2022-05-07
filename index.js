const toggleMenu = document.querySelector(".toggle-menu")
const navList = document.querySelector(".nav-list")

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active")
    navList.classList.toggle("active")
})