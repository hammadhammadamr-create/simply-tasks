let inputs = document.querySelectorAll("input");
let form = document.getElementById("form");

form.addEventListener("submit" , (e) => {
    e.preventDefault();

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value.trim();
    let job = document.getElementById("job").value;
    let gender = document.querySelectorAll(`#gender input:checked`).value;

    if(name.length < 3){
        document.getElementById("nameError").textContent = "Name must be more than 3 characters."
    }else{
        document.getElementById("nameError").textContent = "";
    }
     
    if(!email){
        document.getElementById("emailError").textContent = "Enter a valid email address."
    }else{
        document.getElementById("emailError").textContent = "";
    }

    if(phone.length < 11){
        document.getElementById("phoneError").textContent = "Phone number must be 11 digits."
    }else{
        document.getElementById("phoneError").textContent = "";
    }

    if(!date){
        document.getElementById("dateError").textContent = "Date of birth is required."
    }else{
        document.getElementById("dateError").textContent = "";
    }

    if(!job){
        document.getElementById("jobError").textContent = "Please select a job position."
    }else{
        document.getElementById("jobError").textContent = "";
    }

    if(!gender){
        document.getElementById("genderError").textContent = "Please select a gender."
    }else{
        document.getElementById("genderError").textContent = "";
    }

    console.log(gender);

});