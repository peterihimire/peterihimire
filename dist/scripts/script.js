const navbarBtn = document.querySelector('.navbar_btn');
const navbarLinks = document.querySelector('.navbar_links');
const navbarOverlay = document.querySelector('.navbar-overlay');
const navbarHeader = document.querySelector('.navbar_header');
const backToTop = document.querySelector('#back-to-top')
const pageSection = document.querySelector('section');



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

//sticky and navbar less padding
window.addEventListener('scroll', () => {
  let position = scrollY;
  console.log(position)
  if(position >= 50 ){
    navbarHeader.classList.add('navbar-height');
    navbarHeader.classList.add('navbar-fixed');
    console.log('navbar has passed the zero position');
  } else {
    navbarHeader.classList.remove('navbar-height');
    navbarHeader.classList.remove('navbar-fixed');
    console.log('navbar is at zero position');
  }
})


//backtotop scrolling
window.addEventListener('scroll', () => {
  let position2 = scrollY;
  console.log(position2)
  if(position2 >= 505 ){
    backToTop.classList.add('scrollToTop');
  } else {
    backToTop.classList.remove('scrollToTop');
  }
})


//modifying the section padding
window.addEventListener('scroll', () => {
  let position3 = scrollY;
  if(position3 >= 50 ){
    pageSection.classList.add('padding-1');
    // pageSection.classList.remove('padding-2');
  } else {
  //   pageSection.classList.add('padding-2');
    pageSection.classList.remove('padding-1');
  }
})



// //modifying the section padding for mobile
// window.addEventListener('scroll', () => {
//   let position4 = scrollX;
//   console.log(position4)
//   if(position4 >= 50 ){
//     pageSection.classList.add('padding-1');
//   } else {
//     pageSection.classList.remove('padding-1');
//   }
// })







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




