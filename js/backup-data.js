let juegosRespaldo = [
    {
        id: 'e6dc9307-02b2-4e0d-b491-9ae351219ff6',
        descripcion: 'Hogwarts Legacy es un RPG de acción en un mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.',
        titulo: 'Hogwarts Legacy',
        fechaDeCreacion: '2023-02-10',
        precio: 8999,
        imagen: 'https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg?t=1694060626',
        categoria: 'Aventura'
    },
    {
        id: '76c72fd2-701d-41e7-872c-2553688a5a2a',
        descripcion: 'Explora los vibrantes paisajes de mundo abierto de México con una acción de conducción ilimitada y divertida en los mejores autos del mundo. Acelera hacia Hot Wheels Park y experimenta las pistas más extremas jamás diseñadas.',
        titulo: 'Forza horizon 5',
        fechaDeCreacion: '2021-11-09',
        precio: 11999,
        imagen: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1696957522',
        categoria: 'Carreras'
    },
    {
        id: '05b9578e-93d6-4d7e-8b54-f393596d0f48',
        descripcion: 'Los ejércitos del infierno han invadido la Tierra. Conviértete en el Slayer en una campaña épica para un jugador y cruza dimensiones para impedir la destrucción definitiva de la humanidad.',
        titulo: 'Doom eternal',
        fechaDeCreacion: '2020-03-20',
        precio: 1999,
        imagen: 'https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg?t=1693933695',
        categoria: 'Accion'
    },
    {
        id: 'e082517a-5010-4646-8f5c-2e1c518970f2',
        descripcion: 'Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por Estados Unidos en los albores del siglo XX.',
        titulo: 'Red dead redemption II',
        fechaDeCreacion: '2019-12-05',
        precio: 11299,
        imagen: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956',
        categoria: 'Aventura'
    },
    {
        id: 'e8d29bd1-9e8b-4065-895e-2f483b281d13',
        descripcion: 'Sé la última persona en pisar el freno en EA SPORTS™ F1® 23, el videojuego oficial del 2023 FIA Formula One World Championship™. Un nuevo capítulo del emocionante modo historia "Braking Point" ofrece drama a alta velocidad y rivalidades intensas.',
        titulo: 'F1 23',
        fechaDeCreacion: '2023-06-16',
        precio: 11999,
        imagen: 'https://cdn.akamai.steamstatic.com/steam/apps/2108330/header.jpg?t=1696413810',
        categoria: 'Carreras'
    }
]

if (JSON.parse(localStorage.getItem("productos")) === null) {

    localStorage.setItem("productos", JSON.stringify(juegosRespaldo))
}


const userInicio = [
    {
        nombreCompleto: 'Daniel Lee',
        email: 'admin@admin.com',
        id: 'c676845d-815b-4bac-bc33-15f32eb22e02',
        contrasena: 'admin',
        fechaDeNacimiento: '1986-11-12',
        provincia: 'Formosa',
        Observaciones: 'Nulo',
        role: "ROLE_ADMIN"
    },
    {
        nombreCompleto: 'Samantha Davis',
        email: 'samantha.davis@example.com',
        id: 'bb1b59de-12f2-4097-ae82-ec2156f24c18',
        contrasena: 'alfabeta',
        fechaDeNacimiento: '1998-12-24',
        provincia: 'Jujuy',
        Observaciones: 'Nulo',
        role: "ROLE_CLIENT"
    },
    {
        nombreCompleto: 'James Moore',
        email: 'james.moore@example.com',
        id: '2c85a19f-08ca-419d-95a0-c9c590c4e8b8',
        contrasena: 'alfabeta',
        fechaDeNacimiento: '1982-07-30',
        provincia: 'Buenos Aires',
        Observaciones: 'Nulo',
        role: "ROLE_CLIENT"
    },
    {
        nombreCompleto: 'Isabella Taylor',
        email: 'isabella.taylor@example.com',
        id: '8717041f-25fc-444b-8459-2f51e7fcf955',
        contrasena: 'alfabeta',
        fechaDeNacimiento: '1992-05-22',
        provincia: 'Cordoba',
        Observaciones: 'Nulo',
        role: "ROLE_CLIENT"
    },
]


if(localStorage.getItem("users") === null) {

    localStorage.setItem("users", JSON.stringify(userInicio))

}