const campos = {
  emailog: false,
  passlog: false
}

/*validar email*/

document.getElementById('email').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(campo.value)) {
      valido.innerText = "Válido";
      campos['emailog']  = true;
    } else {
      valido.innerText = "Ingresa tu correo con un formato valido";
    }
});

var Password1 = '1234';

document.getElementById('password').addEventListener('input', function() {
  campoPassword = event.target;
  valida = document.getElementById('passwordOK');
  if (Password1 == (campoPassword.value)){
    valida.innerText = "La contraseña coincide";
    campos['passlog'] = true;
  }
  else{
    valida.innerText = "La contraseña no coincide con la almacenada";
  }
      

});

var login = document.getElementById('formulario_login');

login.addEventListener('submit', function() {

  if (campos.emailog && campos.passlog){
    alert('Has iniciado sesión');
  }else{
    alert('Algo salio mal');
  }

});

