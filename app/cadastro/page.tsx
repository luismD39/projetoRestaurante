"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Cadastro(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function cadastrarUsuario(e:any) {
        e.preventDefault()

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/produtos`,{
                method:"POST",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify({
                    nome,
                    email,
                    senha
                })
            })

            if(response.ok){
                alert("Usuário cadastrado com sucesso!")
            }
        } catch (error) {
            console.log(error)
            alert("Erro")
        }
    }

    return(
        <main>
            <form onSubmit={cadastrarUsuario}>

                <input type="text"
                placeholder="Nome de usuário..."
                onChange={(e)=>setNome(e.target.value)}
                required/>

                <input type="text"
                placeholder="Email..."
                onChange={(e)=>setEmail(e.target.value)}
                required/>

                <input type="text"
                placeholder="Senha..."
                onChange={(e)=>setSenha(e.target.value)}
                required/>

                <button type="submit"
                className="">
                    Criar conta
                </button>

            </form>
        </main>
    )
}