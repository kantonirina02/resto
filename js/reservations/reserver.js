// Validation JS pour le formulaire de réservation
const allergieInput = document.getElementById("AllergieInput");
const nbConvivesInput = document.getElementById("NbConvivesInput");
const dateInput = document.getElementById("DateInput");
const selectHour = document.getElementById("selectHour");
const formResa = document.querySelector("form");
const btnResa = document.querySelector("button[type='submit']");

function validateResaForm() {
    let valid = true;
    // Allergies : facultatif
    // Nb convives : requis et > 0
    if(nbConvivesInput.value === '' || parseInt(nbConvivesInput.value) <= 0) {
        nbConvivesInput.classList.add("is-invalid");
        valid = false;
    } else {
        nbConvivesInput.classList.remove("is-invalid");
        nbConvivesInput.classList.add("is-valid");
    }
    // Date : requise
    if(dateInput.value === '') {
        dateInput.classList.add("is-invalid");
        valid = false;
    } else {
        dateInput.classList.remove("is-invalid");
        dateInput.classList.add("is-valid");
    }
    // Heure : requise
    if(selectHour.value === '') {
        selectHour.classList.add("is-invalid");
        valid = false;
    } else {
        selectHour.classList.remove("is-invalid");
        selectHour.classList.add("is-valid");
    }
    btnResa.disabled = !valid;
    return valid;
}

nbConvivesInput.addEventListener("input", validateResaForm);
dateInput.addEventListener("change", validateResaForm);
selectHour.addEventListener("change", validateResaForm);

formResa.addEventListener("submit", function(e) {
    if(!validateResaForm()) {
        e.preventDefault();
    }
});
