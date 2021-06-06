
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    const header = document.getElementsByTagName("header")[0];
    const nav = document.getElementsByClassName("nav-toggle-label")[0];
    
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
    }

    prevScrollpos = currentScrollPos;
    header.classList.toggle("sticky",window.scrollY > 0)
    nav.classList.toggle("stick",window.scrollY > 0)
}

