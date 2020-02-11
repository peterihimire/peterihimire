const navbarBtn = document.querySelector('.navbar_btn');
const navbarLinks = document.querySelector('.navbar_links');
const navbarOverlay = document.querySelector('.navbar-overlay');


const contactForm = document.querySelector('#contact-form')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const button = document.querySelector('#c-button');
const msgAlert = document.querySelector('#msg');
const closeBtn = document.querySelector('#close')




// For menu button
navbarBtn.addEventListener('click' , () => {
  let value = navbarLinks.classList.contains('navbar_collapse');

  if(value){
    navbarLinks.classList.remove('navbar_collapse');
    navbarBtn.classList.remove('change');
    navbarOverlay.classList.remove('transparent-background');

    window.addEventListener('click', function(e){
      console.log(e.target)
      console.log('clicked the window')
    })
  }else{
    navbarLinks.classList.add('navbar_collapse');
    navbarBtn.classList.add('change');
    navbarOverlay.classList.add('transparent-background');
  }
})

navbarOverlay.addEventListener('click', (e)=> {
  console.log(e.target)
  console.log('navbar overlay has been clicked');
  let value = navbarLinks.classList.contains('navbar_collapse');
  if (value){
    navbarLinks.classList.remove('navbar_collapse');
    navbarBtn.classList.remove('change');
    navbarOverlay.classList.remove('transparent-background');
  }
})




// For AOS
AOS.init();



// For The Contact Form Validation
const onSubmit = (event) => {
  event.preventDefault()
  console.log('Button has been clicked.');
  console.log(event.target)

  if(nameInput.value === '' || emailInput.value === '' || messageInput.value === ''){
   
    msgAlert.classList.add('error');
    msgAlert.innerHTML = `
      <p>Please enter all fields.</p>
      <span id="close" class="closebtn">&times</span>
    `;
   
    setTimeout( () => msgAlert.remove(), 3000);
   
  } else {
    console.log('Success')
    msgAlert.classList.add('success');
    msgAlert.innerHTML = `
      <p>Thank you! Your form submission has been received.</p>
      <span id="close" class="closebtn">&times</span>
    `;
   
    setTimeout( () => msgAlert.remove(), 3000);
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }

}

contactForm.addEventListener('submit', onSubmit);




