"use strict"

import { criarContato, lerContatos } from "./contatos.js"

let contatos = await lerContatos()

function manipulaContatos(contatos) {

    contatos.forEach( (contato) => {
        
        let containerCards = document.getElementById("container")

        let containerCardContato = document.createElement("div")
        containerCardContato.classList.add("card-contato")

        containerCards.appendChild(containerCardContato)

        let profilePhoto = document.createElement("img")

        let imageProfilePhoto = contato.foto

        if (imageProfilePhoto == undefined || imageProfilePhoto == null || imageProfilePhoto.includes("semFoto")) {

            imageProfilePhoto = "../img/default.jpg"

        }

        profilePhoto.src = imageProfilePhoto

        containerCardContato.appendChild(profilePhoto)

        let nameProfile = document.createElement("h2")
        nameProfile.textContent = contato.nome

        containerCardContato.appendChild(nameProfile)

        let numberProfile = document.createElement("p")
        numberProfile.textContent = contato.celular

        containerCardContato.appendChild(numberProfile)

    });

}

const buttonCriarContato = document.getElementById("novo-contato")

buttonCriarContato.addEventListener("click", () => {

    const main = document.querySelector("main")
    
    main.classList.remove("card-show")
    main.classList.add("form-show")
    

})

const buttonCancelar = document.getElementById("cancelar")

buttonCancelar.addEventListener("click", () => {
    const main = document.querySelector("main")

    main.classList.remove("form-show")
    main.classList.add("card-show")

})

const buttonSalvar = document.getElementById("salvar")

buttonSalvar.addEventListener("click", async () => {

    const inputNome = document.getElementById("nome")
    const inputEmail = document.getElementById("email")
    const inputCelular = document.getElementById("celular")
    const inputEndereco = document.getElementById("endereco")
    const inputCidade = document.getElementById("cidade")
    const inputFoto = document.getElementById("foto")

    if (inputEmail.value == "" || inputCelular.value == "") {

        alert("Um dos campos obrigatórios não foram preenchido!!!")

    } else {

        let contato = {

            "id": ``,
            "nome": `${inputNome.value}`,
            "email": `${inputEmail.value}`,
            "foto": `${inputFoto.value}`,
            "celular": `${inputCelular.value}`,
            "endereco": `${inputEndereco.value}`,
            "cidade": `${inputCidade.value}`

        }

        console.log(inputFoto.value)

        await criarContato(contato)

        const main = document.querySelector("main")
        main.classList.remove("form-show")
        main.classList.add("card-show")

    }

})

manipulaContatos(contatos)