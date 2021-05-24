let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");
let logoImg = document.querySelector("header div.logo img");

window.addEventListener("scroll", () => {
    if ( pageYOffset != 0) {
        header.style.backgroundColor = "rgba(0,0,0,0.8)";
        header.style.color = "white";
        logoImg.style.backgroundColor = "rgba(255,255,255,0.3)";

        headerAnchor.forEach(a => {
            a.style.color = " white ";
        })        
    }
    else{
        header.style = "";

        headerAnchor.forEach(a => {
            a.style.color = " #09777d ";
        })
    }
})