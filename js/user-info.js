const currentUser = JSON.parse(localStorage.getItem("currentUser"))

const headerUserInfo = document.getElementById("user-header-name")
const headerUserAction = document.getElementById("user-action")
const navbarLink = document.querySelector("ul.navbar-nav#nav-list")


headerUserInfo.innerText = currentUser ? currentUser.nombreCompleto : ""


if(currentUser) {
    headerUserAction.innerHTML = `<button class="btn-logout" onclick="logout()">Logout</button>`
    
    if(currentUser.role === 'ROLE_ADMIN') {
        //! link de admin-productos
        const adminProductLink = document.createElement('li')
        adminProductLink.classList.add('nav-item')
        adminProductLink.id = 'nav-admin-product'

        
        const linkProduct = document.createElement('a')
        linkProduct.classList.add('nav-link')
        linkProduct.href = '/pages/admin-product/admin-product.html';
        linkProduct.innerText = 'Productos'
        
        const url = window.location.pathname;
        if(url.includes('admin-product.html')) {

            linkProduct.classList.add('active')
        }

        adminProductLink.appendChild(linkProduct)
        navbarLink.appendChild(adminProductLink)

        //! link de admin-users
        const adminUsersLink = document.createElement('li')
        adminUsersLink.classList.add('nav-item')
        adminUsersLink.id = 'nav-admin-users'

        const linkUsers = document.createElement('a')
        linkUsers.classList.add('nav-link')
        linkUsers.href = '/pages/admin-users/admin-users.html'
        linkUsers.innerText = 'usuarios'

        adminUsersLink.appendChild(linkUsers)
        navbarLink.appendChild(adminUsersLink)
        
        if(url.includes('admin-users.html')) {

            linkUsers.classList.add('active')
        }



    }

} else {
    headerUserAction.innerHTML = `<button class="btn-nav-login" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>`
}




function logout() {
    localStorage.removeItem("currentUser")
    setTimeout(function() {
        const product = document.getElementById("nav-admin-product")
        const users = document.getElementById("nav-admin-users")
        product.remove()
        users.remove()
        window.location.href = "/index.html"
    }, 500)
}