document.addEventListener('DOMContentLoaded',()=>{
    //1. Seleccionar los elementos del DOM
    const registroForm = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('correo');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorCorreo');
    const errorPassword = document.getElementById('errorPassword');
    const errorConfirmPassword = document.getElementById('errorConfirmPassword');
    const successMessage = document.getElementById(`successMessage`);


    //Funcion para mostrar un mensaje de error

    function mostrarError(elementoError, inputElement, mensaje){
        elementoError.textContent = mensaje;
        elementoError.style.display = 'block';
        inputElement.classList.add('invalid');
    }

    //Funcion para ocultar un mensaje de error

    function ocultarError(elementoError, inputElement){
        elementoError.style.display = 'none';
        inputElement.classList.remove('invalid');
    }

    //Manejar  el evento del submit del formulario
    registroForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        successMessage.style.display = 'none';

        ocultarError(errorNombre,nombreInput);
        ocultarError(errorEmail,emailInput);
        ocultarError(errorPassword,passwordInput);
        ocultarError(errorConfirmPassword,confirmPasswordInput);

        //Validar todos los campos al enviar

        let formValido = true;

        if (nombreInput.value.trim() === ''){
            mostrarError(errorNombre,nombreInput,'El nombre es requerido');
            formValido = false;
        }
        //Validacion para correo electronico

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === ''){
            mostrarError(errorEmail,emailInput,'El correo es requerido');
            formValido = false;
        }else if (!emailPattern.test(emailInput.value.trim())){
            mostrarError(errorEmail,emailInput,'Ingrese un correo valido');
            formValido = false;
        }
        //Validacion de la contraseña
        if (passwordInput.value.trim() === ''){
            mostrarError(errorPassword,passwordInput,'la contraseña es requerida');
            formValido = false;

        }else if (passwordInput.value.trim().length <6){
            mostrarError(errorPassword,passwordInput,'La contreseña debe de ser mayor a 6');
            formValido = false;
        }

        //Validacion de la confirmacion de la contraseña

        if (confirmPasswordInput.value.trim() === ''){
            mostrarError(errorConfirmPassword,confirmPasswordInput,'Debe de reingresar la contraseña');
            formValido = false;
        }else if (confirmPasswordInput.value !== passwordInput.value){
            mostrarError(errorConfirmPassword,confirmPasswordInput,'Las contraseñas deben ser iguales');
            formValido = false;
        }

        //Si el formulario es valido, mostrar el mensaje de exito y resetear el formulario

        if (formValido) {
            successMessage.style.display = 'block';
            registroForm.reset(); // Limpia todos los campos del formulario
            console.log('Formulario enviado correctamente !');

        }

    });

});