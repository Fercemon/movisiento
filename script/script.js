const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll('.nav-links');
let elements = document.getElementsByClassName("fadeOut");


count = 1;
menu.addEventListener('click', () => {
    count++;
    if (count % 2 == 0) {
        let i;
        for (i = 0; i < navLinks.length; i++) {
            navLinks[i].style.left = "0";
        }
        document.getElementById("main").style.marginLeft = "10rem"

    } else {
        for (i = 0; i < navLinks.length; i++) {
            navLinks[i].style.left = "-100%";
        }
        document.getElementById("main").style.marginLeft = "0"
    }

});


/* document.addEventListener('scroll', () => {

    let pageTop = window.screenTop + 50;

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        console.log(element);
        let elementRect = element.getBoundingClientRect();
        console.log(element.getBoundingClientRect().top);
        if (pageTop > elementRect.top) {
            element.style.opacity = '0';
        } else {
            element.style.opacity = '1';
        }
    }

}); */