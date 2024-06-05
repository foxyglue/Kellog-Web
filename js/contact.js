function validateForm() {
    const fName = document.getElementById('fname');
    const lName = document.getElementById('lname');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const desc = document.getElementById('desc');
    const error_fname = document.getElementById('error_fname');
    const error_lname = document.getElementById('error_lname');
    const error_phone = document.getElementById('error_phone');
    const error_email = document.getElementById('error_email');
    const error_desc = document.getElementById('error_desc');
    const form = document.getElementById('form');
    
    let isValid = true;

    // Clear all previous error messages
    error_fname.innerHTML = "";
    error_lname.innerHTML = "";
    error_phone.innerHTML = "";
    error_email.innerHTML = "";
    error_desc.innerHTML = "";

    // Validate first name
    if (fName.value == "") {
        error_fname.innerHTML = "First Name cannot be empty!";
        isValid = false;
    }

    // Validate last name
    if (lName.value == "") {
        error_lname.innerHTML = "Last Name cannot be empty!";
        isValid = false;
    }

    // Validate phone
    const phonePattern = /^[0-9]+$/;
    if (phone.value == "") {
        error_phone.innerHTML = "Phone cannot be empty!";
        isValid = false;
    } else if (!phone.value.match(phonePattern)) {
        error_phone.innerHTML = "Phone must be numeric!";
        isValid = false;
    } else if (phone.value.length < 10) {
        error_phone.innerHTML = "Phone must be at least 10 digits!";
        isValid = false;
    }

    // Validate email
    if (email.value == "") {
        error_email.innerHTML = "Email cannot be empty!";
        isValid = false;
    } else if (!email.value.endsWith("@gmail.com")) {
        error_email.innerHTML = "Email must end with @gmail.com";
        isValid = false;
    }

    // Validate description
    if (desc.value == "") {
        error_desc.innerHTML = "Description cannot be empty!";
        isValid = false;
    } else if (desc.value.length < 10) {
        error_desc.innerHTML = "Description must be at least 10 characters!";
        isValid = false;
    }

    // If validation passes, submit the form
    if (isValid) {
        form.reset();
        form.submit();
    }
}

const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener('click', validateForm);
