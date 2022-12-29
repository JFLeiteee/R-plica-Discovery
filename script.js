const nav = document.getElementById('navbar');

window.addEventListener('scroll', (event) => {
    if (scrollY > 0) {
        nav.classList.remove("navbar");
        nav.classList.add("hide");
        n = n  + 1;
        console.log(n);
    }
    else  { 
        nav.classList.remove("hide");
        nav.classList.add("navbar");
    }

})
