var loginslide = document.querySelector('.login-btn')
var SignupSlide = document.querySelector('.signup-btn')
var image = document.querySelector('.image-area')
var form = document.querySelectorAll('form input')
var border = document.querySelectorAll('form div')
var forgetP = document.querySelector('.p-reset')
var goBack = document.querySelector('.go-back')
var registerArea = document.querySelector('.register-area')
var lock = document.querySelector('#lock')
var fpBtn = document.getElementById('forget-password')
var password = document.querySelectorAll('#password')
var mobileSignUp = document.querySelector('.mb-register-area')
var mobileLogin = document.querySelector('.mb-register-area-login')
var mobileLoginlink = document.querySelector('.login-btn-mobile')
var mobileSignuplink = document.querySelector('.signup-btn-mobile')
var fpbtnMobile = document.querySelector(".forget-password-mobile")
var forgetPMobile = document.querySelector('.p-reset-mobile')
var goBackMobile = document.querySelector('.go-back-mobile')
console.log(fpbtnMobile)
console.log(forgetPMobile)
// mobile view animation
mobileLoginlink.addEventListener('click', ()=>{
    mobileSignUp.style.transform = 'translateY(200%)';
    mobileLogin.style.transform = 'translateY(0%)';
})
mobileSignuplink.addEventListener('click', ()=>{
    mobileSignUp.style.transform = 'translateY(0%)';
    mobileLogin.style.transform = 'translateY(200%)';
})
// forget password animation mobile view
fpbtnMobile.addEventListener('click', ()=>{
    forgetPMobile.style.transform = 'translateY(0%)';
    mobileSignUp.style.transform = 'translateY(200%)';
    mobileLogin.style.transform = 'translateY(200%)';
})

goBackMobile.addEventListener('click',()=>{
    forgetPMobile.style.transform = 'translateY(200%)';
    mobileSignUp.style.transform = 'translateY(200%)';
    mobileLogin.style.transform = 'translateY(0%)';
})


// to allow you to view password
for (let m = 0; m < password.length; m++) {
    const passwordInput = password[m];    
}
lock.addEventListener('click', ()=>{
    if (passwordInput.type == "password") {
        passwordInput.type = "text";
        
    }else{
        passwordInput.type = "password";
    }
})

// border animation
// for (let i = 0; i < form.length; i++) {
//     const input = form[i];
//  input.addEventListener("click", ()=>{
//             border.classList.toggle("active")
//         })
    
// }




// animation for the image
SignupSlide.addEventListener('click', ()=>{
//   image.classList.toggle('active')
  image.style.transform = 'translateX(0%)';
})

loginslide.addEventListener('click', ()=>{
    image.style.transform = 'translateX(42.88%)';
}) 
// forget password animation mobile view
fpbtnMobile.addEventListener('click', ()=>{
    forgetPMobile.style.transform = 'translateY(0%)';
    mobileSignUp.style.transform = 'translateY(200%)';
    mobileLogin.style.transform = 'translateY(200%)';
})

// forgetpassword animation
fpBtn.addEventListener("click", ()=>{
    forgetP.style.transform = 'translateY(0%)';
    registerArea.style.transform = 'translateY(200%)';

})
goBack.addEventListener('click', ()=>{
    forgetP.style.transform = 'translateY(200%)';
    registerArea.style.transform = 'translateY(0%)';
})




