const video1 = document.getElementById('projectvid-1');
const video2 = document.getElementById('projectvid-2');
const video3 = document.getElementById('projectvid-3');
const hoverSign = document.querySelector(".hoverSign");

const vidlist = [video1,video2,video3];

vidlist.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout',function(){
        video.pause()
        hoverSign.classList.remove("active")
    })
})






















































// Inputsection
function validateNumber(input) {
    const value = input.value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if (!/^\d{0,10}$/.test(value)) {
        errorMsg.textContent = 'Only digits allowed (max 10).';
        input.value = value.slice(0, 10).replace(/\D/g, '');
        input.style.borderColor = 'red';
    } else {
        errorMsg.textContent = '';
        input.style.borderColor = '';
    }
}

function validateForm() {
    let valid = true;

    // Full Name validation
    const fullName = document.getElementById('fullName');
    const nameError = document.getElementById('nameError');
    if (fullName.value.trim() === '') {
        nameError.textContent = 'Full name is required.';
        fullName.style.borderColor = 'red';
        valid = false;
    } else {
        nameError.textContent = '';
        fullName.style.borderColor = '';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        email.style.borderColor = 'red';
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email.';
        email.style.borderColor = 'red';
        valid = false;
    } else {
        emailError.textContent = '';
        email.style.borderColor = '';
    }

    // Phone Number validation (must be 10 digits)
    const phone = document.getElementById('numberInput');
    const phoneError = document.getElementById('errorMsg');
    if (phone.value.trim().length !== 10) {
        phoneError.textContent = 'Phone number must be exactly 10 digits.';
        phone.style.borderColor = 'red';
        valid = false;
    } else {
        phoneError.textContent = '';
        phone.style.borderColor = '';
    }

    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
        messageError.textContent = 'Please enter a message.';
        message.style.borderColor = 'red';
        valid = false;
    } else {
        messageError.textContent = '';
        message.style.borderColor = '';
    }

    return valid;
}


