submitButton = document.querySelector(".submit-button")

nameInput = document.querySelector(".name-input")
numberInput = document.querySelector(".number-input")
emailInput = document.querySelector(".email-input")
companyInput = document.querySelector(".company-input")
descriptionInput = document.querySelector(".desc-input")
formHeader = document.querySelector(".form-header")
postHeader = document.querySelector(".post-header")
honeypot = document.getElementById("honeypot")

submitted = false; 

submitButton.addEventListener(("click"), function() {
    if (submitted == true) return; 

    submitButton.style.animation = "none"

    validName = true;
    validNumber = true;
    validEmail = true;
    validDescription = true;
    valid = true;

    if (nameInput.value.length < 2) {
        validName = false;
    }
    number = String(numberInput.value)
    if (number.length < 8) {
        validNumber = false; 
    }
    if (emailInput.value.length < 1 || emailInput.value.includes("@") == false) {
        validEmail = false; 
    }
    if (descriptionInput.value.length < 2) {
        validDescription = false; 
    }

    forms = [[validName, nameInput], [validNumber, numberInput], [validEmail, emailInput], [validDescription, descriptionInput]]

    forms.forEach(form => {
        if (form[0] == false) {
            valid = false;
            form[1].style.borderBottom = "2px solid#ff8787fa";
        } else {
            form[1].style.borderBottom = "2px solid #e0e0e0fa";
            form[1].style.color = "white";
        }
    })

    if (valid == false) {
        requestAnimationFrame(()=>{
            submitButton.style.animation = "shake 0.8s cubic-bezier(.36,.07,.19,.97) both";
        });
        return;
    }

  const formData = new FormData();
  company = companyInput.value
  if (companyInput.value.length < 1) {
    company = "Not Provided."
  }

  // Add specific fields to the form data
  formData.append('_name', nameInput.value);
  formData.append('_replyto', emailInput.value); // Set the reply-to email address
  formData.append('_subject', descriptionInput.value); // Set the email subject
  formData.append('_autoresponse', 'true'); // Enable autoresponse email

  // Send the form data to FormSubmit.co
  fetch('https://formsubmit.co/sosremodeling@aol.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      Name: nameInput.value,
      Email: emailInput.value,
      Phone: numberInput.value,
      Company: companyInput.value,
      Message: descriptionInput.value,
      _honey: honeypot.value
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

  submitButton.innerHTML = 'Sent <i class="uil uil-check"></i>';
  submitButton.style.color = "rgb(16, 190, 109)";
  nameInput.style.display = "none";
  numberInput.style.display = "none";
  emailInput.style.display = "none";
  companyInput.style.display = "none";
  descriptionInput.style.display = "none";

  formHeader.style.display = "none";
  postHeader.style.display = "block";

  submitted = true; 
})