// Input fields event linteners
// we are adding using blur so that the event triggers when user clicks outside of the input box 
// to validate it immediately

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZipcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


// Validate Name 
function validateName(){
    const nameInput = document.getElementById('name');
    const reName = /^[A-Za-z]{2,10}$/

    if(!reName.test(nameInput.value)){
        nameInput.classList.add('is-invalid');
    } else {
        nameInput.classList.remove('is-invalid');
    }
}

// Validate Zipcode
function validateZipcode(){
    const zipInput = document.getElementById('zip');
    const reZip = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;

    if(!reZip.test(zipInput.value)){
        zipInput.classList.add('is-invalid');
    } else {
        zipInput.classList.remove('is-invalid');
    }
}

// Validate Email
// + because we want more than one
function validateEmail(){
    const emailInput = document.getElementById('email');
    const reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;

    if(!reEmail.test(emailInput.value)){
        emailInput.classList.add('is-invalid');
    } else {
        emailInput.classList.remove('is-invalid');
    }
}

// Validate Phone
function validatePhone(){
    const phoneInput = document.getElementById('phone');
    const rePhone = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/

    if(!rePhone.test(phoneInput.value)){
        phoneInput.classList.add('is-invalid');
    } else {
        phoneInput.classList.remove('is-invalid');
    }
}