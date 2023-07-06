let next = document.querySelector('#contact_slide .owl-controls .owl-nav .owl-next');
let prev = document.querySelector('#contact_slide .owl-controls .owl-nav .owl-prev');
let owlItem = document.querySelectorAll('#contact_slide .owl-stage .owl-item');
let x = 0;
prev.disabled = true;
prev.classList.add('disabled');

next.addEventListener('click', function () {
    let active = document.querySelectorAll('#contact_slide .owl-stage .owl-item.active');
    let owlStage = document.querySelector('#contact_slide .owl-stage');
    // console.log("activeCount:", active);

    if (active[active.length - 1].nextElementSibling !== null) {
        active[0].classList.remove('active');
        active[active.length - 1].nextElementSibling.classList.add('active');
        x = x - 170;
        owlStage.style.transform = `translate3d(${x}px, 0px, 0px)`;
        prev.disabled = false;
        prev.classList.remove('disabled');
    }
    if (active[active.length - 1].nextElementSibling.nextElementSibling === null){
        next.disabled = true;
        next.classList.add('disabled');
    }
});

prev.addEventListener('click', function () {
    let active = document.querySelectorAll('#contact_slide .owl-stage .owl-item.active');
    let owlStage = document.querySelector('#contact_slide .owl-stage');

    if (active[0].previousElementSibling !== null) {
        active[active.length - 1].classList.remove('active');
        active[0].previousElementSibling.classList.add('active');
        x = x + 170;
        owlStage.style.transform = `translate3d(${x}px, 0px, 0px)`;
        next.disabled = false;
        next.classList.remove('disabled');
    }
    if(active[0].previousElementSibling.previousElementSibling === null){
        prev.disabled = true;
        prev.classList.add('disabled');
    }
})



