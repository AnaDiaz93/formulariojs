document.addEventListener('DOMContentLoaded',()=>{
    //1.Seleccionar los elementos del DOM
    const registroForm = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('correo');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorCorreo');
    const errorPassword = document.getElementById('errorPassword');
    const errorConfirmPassword = document.getElementById('errorConfirmPassword');
    const successMessage = document.getElementById('successMessage');


    //2.Función para mostrar un mensaje de error

    function mostrarError(elementoError, inputElement, mensaje){
        elementoError.textContent = mensaje;
        elementoError.style.display = 'block';
        inputElement.classList.add('invalid');
    }

    //3.Función para ocultar un mensaje de error

    function ocultarError(elementoError, inputElement){
        elementoError.style.display = 'none';
        inputElement.classList.remove('invalid');  
    }
    
    //4.Manejar el evento del submit del formulario
    registroForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        successMessage.style.display = 'none';

        //Ocultar al enviarse el formulario
        ocultarError(errorNombre, nombreInput);
        ocultarError(errorEmail, emailInput);
        ocultarError(errorPassword, passwordInput);
        ocultarError(errorConfirmPassword, confirmPasswordInput);

        //Validar todos los campos al enviar
        let formValido = true;
        if (nombreInput.value.trim() === ''){
            mostrarError(errorNombre,nombreInput,'El nombre es requerido');
            formValido = false;
        }

    })


})