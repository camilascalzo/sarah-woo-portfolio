
const form = document.getElementById("contact");

form.addEventListener("submit", function(e) {
    if(!form.checkValidity()){
        e.preventDefault();
    }
        form.classList.add("was-validated");
 
}, false);
