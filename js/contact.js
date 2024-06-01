function check_email(emailInput, errorObj){
    const email = emailInput.value.trim();
    let valid = true;

    if(email === '' || email == null){
        errorObj.textContent = 'Insert your email !' ;
        valid = false;
    }else{
        if(email.indexOf('@') < 0 && email.indexOf('.') < 0){
            errorObj.textContent = 'Must include \'@\' and \'.\' !';
            valid = false;
        }
    }
    
    return valid;
}


function check_phone(phone, error_obj){
    const phone_input = phone.value.trim();
    let valid = true;

    if(phone_input === '' || phone_input == null){
        error_obj.textContent = 'Insert your phone number !';
        valid = false;
    }else{  
        for(let i = 0 ; i<phone_input.length ; i++){
            if(phone_input.charAt(i) < '0' || phone_input.charAt(i) > '9'){
                error_obj.textContent = 'Only digit number!';
                valid = false;
                break;
            }
        }
    }

    return valid;
}

function check_name(name_input, error_obj, pos){
    let valid = true;
    let trimmed_name = name_input.value.trim();

    if(trimmed_name === '' || trimmed_name == null ){
        error_obj.textContent = 'Insert your ' + pos +' name !' ;
        valid = false;
    }else{  
        for(let i = 0 ; i<trimmed_name.length ; i++){
            if(trimmed_name.charAt(i) >= '0' && trimmed_name.charAt(i) <= '9'){
                error_obj.textContent = 'Only alphabetic characters!' ;
                valid = false;
                break;
            }
        }
    }
    return valid;
}


function check_desc(desc_input, error_obj) {
  let trimmed_desc = desc_input.value.trim();
  let valid = true;

  if (!trimmed_desc) {
    error_obj.textContent = 'Insert your description!';
    valid = false;
  } else if (trimmed_desc.length < 10) {
    error_obj.textContent = 'At least 10 characters!';
    valid = false;
  }

  return valid;
}


form.addEventListener('submit',(e) => {
    
    let email_valid = check_email(document.querySelector('.row-form.email'), document.getElementById('error_email'));
    let phone_valid = check_phone(document.querySelector('.row-form.phone'), document.getElementById('error_phone'));
    let fname_valid = check_name(document.querySelector('.row-form.fname'), document.getElementById('error_fname'),'first');
    let lname_valid = check_name(document.querySelector('.row-form.lname'), document.getElementById('error_lname'),'last');
    let desc_valid = check_desc(document.getElementById('desc'), document.getElementById('error_desc'));

    if(!email_valid || !phone_valid || !fname_valid || !lname_valid || !desc_valid){
        e.preventDefault();
    }
});
