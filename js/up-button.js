const toTop = document.querySelector('.up-button');
window.addEventListener("scroll", () => {

    if(window.pageYOffset > 50) {

        toTop.classList.add('active');

    } else {

        toTop.classList.remove('active');

    }

})