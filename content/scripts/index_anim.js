
gsap.to(".block-1", {
    duration: 2,
    x: "-300",
    y: "-100",
    scale: "2",
    ease: Expo.easeInOut,
});

gsap.to(".block-2", {
    duration: 2,
    x: "-300",
    y: "200",
    scale: "2",
    ease: Expo.easeInOut,
});

gsap.to(".block-4", {
    duration: 2,
    x: "200",
    y: "350",
    scale: "2",
    ease: Expo.easeInOut,
});

/* gsap.to(".s_1", {
    duration: 2,
    x: "-150",
    y: "-100",
    scale: "2",
    ease: Expo.easeInOut,
});

gsap.to(".s_2", {
    duration: 2,
    x: "-350",
    y: "300",
    scale: "2",
    ease: Expo.easeInOut,
});

gsap.to(".s_4", {
    duration: 2,
    x: "210",
    y: "300",
    scale: "2",
    ease: Expo.easeInOut,
}); */


gsap.to(".box", {
    duration: 2.4,
    y: "-100%",
    ease: Expo.easeInOut,
});

gsap.from(".circle-shape", {
    duration: 2.4,
    scale: "0",
    ease: Expo.easeInOut,
});

gsap.from(".circle-shape-2", {
    duration: 2.4,
    scale: "0",
    ease: Expo.easeInOut,
});

gsap.from(".circle-shape-3", {
    duration: 2.4,
    scale: "0",
    ease: Expo.easeInOut,
});

gsap.from(".m_blocks", {
    duration: 2.4,
    scale: "0",
    ease: Expo.easeInOut,
});

let S = document.getElementsByClassName("block-1")[0];
let A = document.getElementsByClassName("block-2")[0];
let C = document.getElementsByClassName("block-4")[0];
let string = document.getElementsByClassName(".wrapper-img::before")[0];
let root = document.documentElement;

S.addEventListener("mouseover", function( string ) {
    root.style.setProperty('--content',"'Sociedad de'");
    string.classList.toggle(".hover_string");
});

A.addEventListener("mouseover", function( string ) {
    root.style.setProperty('--content',"'Artistas'");
    string.classList.toggle(".hover_string");
});

C.addEventListener("mouseover", function( string ) {
    root.style.setProperty('--content',"'Cotidianos.'");
    string.classList.toggle(".hover_string");
});