/* ================= MENU MOBILE ================= */
function hamburg() {
    document.querySelector(".dropdown").classList.add("open");
}

function cancel() {
    document.querySelector(".dropdown").classList.remove("open");
}

/* ================= PAGE IDENTIFICATION ================= */
const path = window.location.pathname;
const body = document.body;

if (path.includes("index.html") || path === "/") {
    body.classList.add("home-page");
} else {
    body.classList.add("inner-page");
}

/* ================= PAGE TRANSITION + LOADER ================= */
const loader = document.getElementById("page-loader");
const links = document.querySelectorAll("a.transition-link");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.target === "_blank") return;

        e.preventDefault();
        const url = this.href;

        loader.classList.add("active");

        setTimeout(() => {
            window.location.href = url;
        }, 400);
    });
});

/* ================= TYPEWRITER ================= */
const texts = ["Développeur Web", "développeur front-end", "developpeur back-end", "Concepteur" ,"Dévéloppeur logiciel", "Criptographe", "Passionné de la Tech"];
let index = 0;
let charIndex = 0;
const speed = 100;
const typeText = document.querySelector(".typewriter-text");

function typeWriter() {
    if (!typeText) return;

    if (charIndex < texts[index].length) {
        typeText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typeText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, speed / 2);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
