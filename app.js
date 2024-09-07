let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function toggleContrast(){
    if(contrastToggle){
        contrastToggle = false;
        return document.body.classList.remove('dark-theme');
    }
    contrastToggle = true;
    document.body.classList += ' dark-theme'

}

function contact(e) {
    e.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible'; 
    emailjs.sendForm(
        "service_8uc5ur5",
        "template_sfuvsvd",
        e.target,
        "AjL_ZAgXHNTmRrohV"
    ).then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList += (' modal__overlay--visible');
    }).catch(() => {
        loading.classList.remove(' modal__overlay--visible');
        alert("Email service temporarily unavailable, Please contact me directly at caleb.smith@diamondoughnut.com");
    });


}

function toggleModal(){
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true;
    document.body.classList += ' modal--open';    
}

function moveBackground(event){
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; i++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;

    }
}