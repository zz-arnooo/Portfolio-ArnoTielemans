const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Classe active du bouton click
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections actives
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //autres btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //cacher les autres sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

const sr = ScrollReveal();
sr.reveal('h1', {
    duration: 5000
});

    //Thème Toggle
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}


// Animation du clic

 window.addEventListener('click', (e) => {
      console.log(e);

     const rond = document.createElement('div');
     rond.className = 'clickAnim';
    rond.style.top = `${e.pageY - 10}px`;
    rond.style.left = `${e.pageX - 10}px`;
     document.body.appendChild(rond);

     setTimeout(() => {
         rond.remove();
     }, 1500)
 })

PageTransitions();

 // J'ai essayé de faire le formulaire de contact par mail mais ca m'a l'air complexe, je le laisse dans le code pour que vous puissiez voir ce que j'ai tenté

//get the form by its id
const form = document.getElementById("contact-form"); 

//1.
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  //2.
  let mail = new FormData(form);

  //3.
  sendMail(mail);
})

const sendMail = (mail) => {
    //1.
    fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
      method: "post", //2.
      body: mail, //3.
  
    }).then((response) => {
      return response.json();
    });
  };