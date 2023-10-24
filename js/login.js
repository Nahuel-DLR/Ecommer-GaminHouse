const users = JSON.parse(localStorage.getItem("users"))

const loginForm = document.getElementById("login")

loginForm.addEventListener("submit", (event) => {

    event.preventDefault()
    
    const emailInput = event.target.elements.email.value;
    const passwordInput = event.target.elements.contrasena.value;

    const userExist = users.find(usr => {
        if(usr.email === emailInput) {
            return true
        }
        return false;
    })

    if(!userExist || userExist.contrasena !== passwordInput) {
        Swal.fire("Login incorrecto", "Los datos ingresados son incorrectos", "error");
        return;
    }
    

    Swal.fire("Login Correcto", "En breve será redireccionado", "success")

    delete userExist.contrasena

    localStorage.setItem( "currentUser", JSON.stringify(userExist)   )

    setTimeout(function() {
        window.location.href = '/index.html'
    }, 2000)
})



const icon = document.querySelector('.iconPassword')
const password = document.getElementById('contrasena')

icon.addEventListener("click", (e) => {
    if(password.type === "password") {
        password.type = "text";
        icon.classList.remove('fa-lock')
        icon.classList.add('fa-unlock')
    } else {
        password.type = "password"
        icon.classList.add('fa-lock')
        icon.classList.remove('fa-unlock')
    }
})