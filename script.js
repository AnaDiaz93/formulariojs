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

        //Validación para correo electrónico

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value.trim() === ''){
            mostrarError(errorEmail,emailInput,'El correo es requerido');
            formValido = false;
        } 
        else if (!emailPattern.test(emailInput.value.trim())){
            mostrarError(errorEmail.emailInput,'Ingrese un correo válido');
            formValido = false;
        }

        //Validación de la contraseña    
        if (passwordInput.value.trim() === ''){
            mostrarError(errorPassword,passwordInput, 'La contraseña es requerida');
            formValido = false;
        }
        else if (passwordInput.value.trim().length < 6){
            mostrarError(errorPassword,passwordInput, 'La contraseña debe ser mayor a 6 caracteres');
            formValido = false;
        }  
        
        //Validación de la confirmación de la contraseña

         if (confirmPasswordInput.value.trim() === ''){
            mostrarError(errorConfirmPassword,confirmPasswordInput, 'Debe de reingresar la contraseña');
            formValido = false;
         }
         else if (confirmPasswordInput.value !== passwordInput.value){
            mostrarError(errorConfirmPassword,confirmPasswordInput,'Las contraseñas deben ser iguales');
            formValido = false;
         }

         // Si el formulario es válido, mostrar el mensaje de éxito y resetear el formulario

         if (formValido){
            successMessage.style.display = 'block';
            registroForm.reset();//Limpia todos los campos del formulario
            console.log('¡Formulario enviado correctamente!');
         }


    });


});