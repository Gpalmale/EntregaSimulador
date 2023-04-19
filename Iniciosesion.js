    let registroUsuario= "Gabo";
    let passguardado= "Gabo1989";

    let maximoIntentos = 3;
    let intentoActual = 1;

    while(intentoActual <= maximoIntentos){
        var inicioSesion= prompt("Ingrese su usuario");
        var pass = prompt("Ingrese su contraseña");

        if(registroUsuario == inicioSesion && passguardado == pass){
            alert("Bienvenido" + registroUsuario);
            intentoActual = maximoIntentos; 
        } else {
            if (intentoActual == 3) {
                alert("Agotaste el número de intentos!");
            } else {
                alert("Inicio de sesión inválido. Favor intente de nuevo");
            }
        }

      
        intentoActual = intentoActual +1 
    }