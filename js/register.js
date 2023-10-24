const users1 = JSON.parse(localStorage.getItem("users"))

const formRegister = document.getElementById("form-register")



formRegister.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const registro = event.target.elements
    
    if(registro.contrasena.value !== registro.repetirContrasena.value) {
        Swal.fire("Error en las contraseñas", "Las contraseñas no coinciden", "error");
        return
    }


    const verificandoUsuario = users1.findIndex((usuario) => {
        if(registro.email.value.trim() === usuario.email) {
            return true
        }
        return false
    })
    
    
    if(verificandoUsuario >= 0) {
        Swal.fire("Usuario ya Existente", `Ya existe un usuario con el correo ${registro.email.value}`, "error");
        return
    }

    const nuevoUsuario = {
        nombreCompleto: registro.nombreCompleto.value,
        email: registro.email.value,
        id: crypto.randomUUID(),
        contrasena: registro.contrasena.value,
        fechaDeNacimiento: registro.fechaNacimiento.value || 'Nulo',
        provincia: registro.provincia.value,
        Observaciones: registro.observaciones.value || 'Nulo',
        role: "ROLE_CLIENT"
    }
    
    users1.push(nuevoUsuario)
    
    localStorage.setItem("users", JSON.stringify(users1))

    Swal.fire("Registro Exitoso", "Registro completado con exito", "success");

    formRegister.reset()
    registro.nombreCompleto.focus()
})