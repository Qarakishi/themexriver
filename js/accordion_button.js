// 1-ci hissede activ classi ile yazilib amma transition yoxdur
//let title = document.querySelectorAll('#accordionExample .s2_faq .s2_faq_header button');
// for(let i=0;  i < title.length; i++){
//     title[i].addEventListener('click', function (){      
//         let active = document.querySelector('#accordionExample .s2_faq.active');
//         if(active && active !== this.parentNode.parentNode){
//             active.children[0].children[0].children[0].classList.replace('fa-circle-minus','fa-circle-plus');
//             active.classList.remove('active');
//         }
//         this.parentNode.parentNode.classList.toggle('active');
//         if(this.children[0].classList.contains('fa-circle-plus')){
//             this.children[0].classList.replace('fa-circle-plus', 'fa-circle-minus');
//         }else{
//             this.children[0].classList.replace('fa-circle-minus', 'fa-circle-plus');
//         }      
//     });
// } 

// 2-ci hissede transition var.max-width yazilib
let acc = document.getElementsByClassName("accordionButton");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let s2Content = this.parentNode.nextElementSibling;
    let active = document.querySelector('#accordionExample .s2_faq.active');
    if(active && active !== this.parentNode.parentNode){
        active.children[1].style.maxHeight = '';
        active.classList.remove('active');
        active.children[0].children[0].children[0].classList.replace('fa-circle-minus', 'fa-circle-plus');
    }
    this.parentNode.parentNode.classList.toggle('active');

    if (s2Content.style.maxHeight) {
      s2Content.style.maxHeight = null;
    } else {
      s2Content.style.maxHeight = s2Content.scrollHeight + "px";
    }

    if (this.children[0].classList.contains('fa-circle-plus')) {
      this.children[0].classList.replace('fa-circle-plus', 'fa-circle-minus');
    } else {
      this.children[0].classList.replace('fa-circle-minus', 'fa-circle-plus');
    }
  });
}