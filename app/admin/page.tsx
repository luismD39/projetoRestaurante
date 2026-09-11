"use client"
import { useState } from "react"
import Image from "next/image"

export default function Admin(){

    const[descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")
    const[preco, setPreco] = useState("")
    const[imagem, setImagem] = useState("")

    async function cadastrarLanche(e:any) {

        e.preventDefault()
        
        try {
            const response = await fetch("http://localhost:3001/produtos",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    descricao,
                    categoria,
                    preco,
                    imagem
                })

            })

            alert("Produto cadastrado com sucesso")
        } catch (error) {
            console.log(error)
            alert("Erro")
        }
    }

    return(
        <main className="min-h-screen bg-amber-50 p-8">
            <div className="mx-auto max-w-xl rounded-lg bg-white p-8 shadow">
                <h1 className="mb-6 text-3xl font-bold text-black justify-center mx-auto flex">Cadastrar lanche</h1>

                <form onSubmit={cadastrarLanche} className="space-y-5">
                    <div>
                        <label className="text-black">Descrição</label>
                        <input type="text"
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)}
                        placeholder="Escreva a descrição do produto aqui..."
                        className="w-full rounded border p-3 border-black text-black"
                        />

                        <label className="text-black">Categoria</label>
                        <input type="text"
                        value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}
                        placeholder="Escreva o nome do produto aqui..."
                        className="w-full rounded border p-3 border-black text-black"
                        />

                        <label className="text-black">Preço</label>
                        <input type="number"
                        value={preco}
                        onChange={(e)=> setPreco(e.target.value)}
                        placeholder="Escreva o preço do produto aqui..."
                        className="w-full rounded border p-3 border-black text-black"
                        />

                        <label className="text-black">Imagem</label>
                        <input type="text"
                        value={imagem}
                         onChange={(e)=> setImagem(e.target.value)}
                        placeholder="Cole o link da imagem aqui..."
                        className="w-full rounded border p-3 border-black text-black"
                        />

                        <button className="w-full bg-green-600 p-3 mt-4 rounded-2xl">
                            Cadastrar lanche
                        </button>
                    </div>
                </form>

                <div>

                </div>
            </div>

        </main>
    )
}