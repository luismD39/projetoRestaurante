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
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/registrar`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, senha })
            })

            const dados = await response.json()

            if(!response.ok) {
                alert(dados.mensagem)
            } else {
                alert("Usuário cadastrado com sucesso!")
            }
        } catch (error) {
            console.log(error)
            alert("Erro de conexão com o servidor")
        }
    }

    return(
        <main className="min-h-screen bg-amber-50 p-8">
            <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow">

                <h1 className="mb-6 text-3xl font-bold text-black justify-center mx-auto flex">Cadastre-se</h1>

                <form onSubmit={cadastrarUsuario} className="space-y-5">

                    <input type="text"
                    placeholder="Nome de usuário..."
                    onChange={(e)=>setNome(e.target.value)}
                    className="w-full rounded border p-3 border-black text-black"
                    required/>

                    <input type="text"
                    placeholder="Email..."
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full rounded border p-3 border-black text-black"
                    required/>

                    <input type="text"
                    placeholder="Senha..."
                    onChange={(e)=>setSenha(e.target.value)}
                    className="w-full rounded border p-3 border-black text-black"
                    required/>

                    <button type="submit"
                    className="w-full bg-green-600 p-3 mt-4 rounded-2xl">
                        Criar conta
                    </button>

                </form>
            </div>
        </main>
    )
}