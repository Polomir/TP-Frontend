const rangos = ["Admin", "Redactor", "Usuario"]

const integrantes = [
    [
        {
            nombre: "Polomir",
            tipo: 0,
            img: "./images/Usuarios/pene.png"
        },
    ],
    [
        {
            nombre: "Bertolungas",
            tipo: 1,
            img: "./images/Usuarios/berto.png"
        },
    
        {
            nombre: "Sebaster",
            tipo: 1,
            img: "./images/Usuarios/Sebaster.png"
        },
    
        {
            nombre: "Jamla",
            tipo: 1,
            img: "./images/Usuarios/jamla.png"
        },
    ],
    [
        {
            nombre: "Nico",
            tipo: 2,
            img: "./images/Usuarios/nico.png"
        },
    
        {
            nombre: "Batrol",
            tipo: 2,
            img: "./images/Usuarios/batrol.png"
        },

        {
            nombre: "Chicho",
            tipo: 2,
            img: "./images/Usuarios/chicho.gif"
        }
    ]
]

const title = document.querySelector(".titulo h1")

const arrowBack =document.querySelector(".titulo .back")

const arrowNext =document.querySelector(".titulo .next")

const integrante = document.querySelector(".integranteCard")

arrowNext.addEventListener("click",()=> {
    let index = parseInt((title.getAttribute("data-index")))

    if(index == rangos.length - 1){
        index = -1;
    }
    changeType(index + 1, 0)
});

arrowBack.addEventListener("click",()=> {
    let index = parseInt((title.getAttribute("data-index")))

    if(index == 0){
        index = rangos.length;
    }
    changeType(index  - 1, 0)
});


const arrowPersonBack =document.querySelector(".scrollPersonas .back")

const arrowPersonNext =document.querySelector(".scrollPersonas .next")

arrowPersonNext.addEventListener("click",()=>{
    let indicePersonaActual =  findActualPersonIndex()
    if(indicePersonaActual == integrantes[index].length - 1){
        indicePersonaActual = -1;
    }
    changePerson(index, indicePersonaActual + 1)
})

arrowPersonBack.addEventListener("click",()=>{
    let indicePersonaActual =  findActualPersonIndex()
    if(indicePersonaActual ==  0){
        indicePersonaActual = integrantes[index].length;
    }
    changePerson(index, indicePersonaActual - 1)
})

function findActualPersonIndex(){
    index = parseInt((title.getAttribute("data-index")))
    nombrePersona = document.querySelector(".integranteCard h2").textContent
    let indicePersonaActual = integrantes[index].indexOf(integrantes[index].find(integrante => integrante.nombre == nombrePersona))
    return indicePersonaActual
}

function changeType(index){

    title.innerHTML = rangos[index]
    title.setAttribute("data-index", index )
    title.setAttribute("class",rangos[index].replaceAll(' ', ''))

    changePerson(index, 0)
    showList(index)
}

function changePerson(index, indicePersonaActual){
    let person = integrantes[index][indicePersonaActual]
    integrante.innerHTML = 
    `
    <h2>${person.nombre}</h2>
    <img src=${person.img} alt="FotoPerfil" class="perfil">
    `
}

function showList(index){
    let listaIntegrantes = document.querySelector(".listaIntegrantes")
    listaIntegrantes.innerHTML = ''
    integrantes[index].forEach(integrante => {
        listaIntegrantes.innerHTML += 
        `
        <li class= "IntegranteLi">${integrante.nombre}</li>
        `
    });

    addButonsToList()
}

function addButonsToList(){
    let listItems = document.querySelectorAll(".listaIntegrantes li")
    console.log(listItems)
    listItems.forEach(li => {
        li.addEventListener("click", ()=>{
            
            findPerson(li.innerHTML)
        })
    });
}

function findPerson(name){
    let index = parseInt((title.getAttribute("data-index")))

    let indiceBuscado = integrantes[index].indexOf(integrantes[index].find(integrante => integrante.nombre == name))
    changePerson(index, indiceBuscado)
}

changeType(0)
