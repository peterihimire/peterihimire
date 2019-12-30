const navbarBtn = document.querySelector('.navbar_btn');
const navbarLinks = document.querySelector('.navbar_links');


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
    }else{
        navbarLinks.classList.add('navbar_collapse');
        navbarBtn.classList.add('change');
    }
})


// For AOS
AOS.init();


// For The Contact Form Validation
button.addEventListener('click', (e)=> {
  e.preventDefault()
  console.log('Button has been clicked.');
  console.log(e.target)

  if(nameInput.value === '' || emailInput.value === '' || messageInput.value === ''){
   
    msgAlert.innerHTML = `
    <p>Please enter all fields.</p>
    <span id="close" class="closebtn">&times</span>
    `;
    msgAlert.classList.add('error');


    setTimeout( ()=> {
      msgAlert.remove();
    }, 3000)
   
  } else {
    console.log('Success')
  }
})

