function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('options')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}


document.addEventListener("DOMContentLoaded", function() {
    var requiredCheckboxes = document.querySelectorAll('.browsers input[type="checkbox"][required]');

    for (var i = 0; i < requiredCheckboxes.length; i++) {
        requiredCheckboxes[i].addEventListener("change", function() {
            var checked = false;

            for (var j = 0; j < requiredCheckboxes.length; j++) {
                if (requiredCheckboxes[j].checked) {
                    checked = true;
                    break;
                }
            }

            if (checked) {
                for (var k = 0; k < requiredCheckboxes.length; k++) {
                    requiredCheckboxes[k].removeAttribute('required');
                }
            } else {
                for (var l = 0; l < requiredCheckboxes.length; l++) {
                    requiredCheckboxes[l].setAttribute('required', 'required');
                }
            }
        });
    }
});


function submitForm(){
    const form = document.getElementById("form_id");
    
    if (form.checkValidity()) {
        // Form is valid, show the popup
        const firstname= document.getElementById("firstname").value;
        const lastname= document.getElementById("lastname").value;
        const birth= document.getElementById("birth").value;
        const country= document.getElementById("country").value;     
        const profession= document.getElementById("profession").value;
        const email= document.getElementById("email").value;
        const mobile= document.getElementById("mobile").value;
        const gender=[];
        const checkboxes=document.querySelectorAll('input[name="options"]:checked');
        checkboxes.forEach(checkbox => {
            gender.push(checkbox.value);
        });  

        let popupMessage = `FirstName: ${firstname}\nLastName: ${lastname}\nDOB: ${birth}\nCountry: ${country}\nProfession: ${profession}\nEmail: ${email}\nMobileNo: ${mobile}`;
        if(gender.length > 0){
            popupMessage += "\nGender: " + gender.join(", ");
        }
        alert(popupMessage);

            // You can reset the form or perform any other action here
        form.reset();
    }else{
        alert("Please fill in all the required fields.");
    }

}


const form = document.getElementById("form_id");

// Add a click event listener to the reset button
form.querySelector("button[type=reset]").addEventListener("click", function(event) {
    // Prevent the default form reset behavior
    event.preventDefault();

    // Reset the form to its initial state
    form.reset();
});

