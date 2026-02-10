const parallax = document.querySelectorAll(".cursor-effect");
const effect = document.querySelectorAll(".pro");
const first_page = document.querySelector(".first_page");
let xvalue = 0, yvalue = 0, zvalue = 0, x1 = 0;

first_page.addEventListener("mousemove", (ele) => {
    xvalue = ele.clientX - window.innerWidth / 2;
    yvalue = ele.clientY - window.innerHeight / 2;
    parallax.forEach((el, i) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(${-xvalue * speedx}px)) translateY(calc(${yvalue * speedy}px))`;
    })
});
