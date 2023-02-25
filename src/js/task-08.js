const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    
    if (email === "" || password === "") {
        return alert ("Будь ласка, заповніть всі поля форми!");
    }  else { const formData = {email, password};
        console.log(formData);
    };

      event.currentTarget.reset();
};

// form[0].setAttribute("required", "");
// form[1].setAttribute("required", "");

    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     const formValue = {
    //         name,
    //         value,
    //     };
    //     console.log(formValue);
    // }) 