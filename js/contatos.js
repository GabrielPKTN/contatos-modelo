"use strict"

export async function lerContatos() {

    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const response = await fetch(url)
    const contatos = await response.json()

    return contatos
}

export async function criarContato(contato) {
    
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok

}

async function deletarContato(id) {

    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    
    const options = {
        method: "DELETE"
    }

    const response = await fetch(url, options)

    return response.ok
}

async function atualizarContato(id, contato) {

    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok

}

const novoContato = {
    "id": "",
    "nome": "O Hollow Knight 👍",
    "celular": "+666 666 666",
    "foto": "https://cdna.artstation.com/p/assets/images/images/013/096/014/large/gabriel-mendes-little-knight2.jpg?1538029076",
    "email": "theKnight@gmail.com",
    "endereco": "Rua dos pombo, 244",
    "cidade": "Jandira"
}


lerContatos()