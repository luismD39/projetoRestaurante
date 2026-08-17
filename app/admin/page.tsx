"use client"
import { useState } from "react"
import Image from "next/image"

export default function Admin(){

    const[nome, setNome] = useState("")
    const[descricao, setDescricao] = useState("")
    const[preco, setPreco] = useState("")
    const[imagem, setImagem] = useState("")

    function selecionarImagem(e: React.ChangeEvent<HTMLInputElement>){
        const arquivo = e.target.files?.[0]

        if(arquivo){
            setImagem(URL.createObjectURL(arquivo))
        }
    }

    async function cadastrarLanche() {
        alert("Cadastro de lanche")   
    }

    return(
        <main className="min-h-screen bg-amber-50 p-8">
            <div className="mx-auto max-w-xl rounded-lg bg-white p-8 shadow">
                <h1 className="mb-6 text-3xl font-bold text-black justify-center mx-auto flex">Cadastrar lanche</h1>

                <form onSubmit={cadastrarLanche} className="space-y-5">
                    <div>
                        <label className="text-black">Nome</label>
                        <input type="text"
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                        placeholder="Escreva o nome do produto aqui..."
                        className="w-full rounded border p-3 border-black"
                        />

                        <label className="text-black">Descrição</label>
                        <input type="text"
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)}
                        placeholder="Escreva a descrição do produto aqui..."
                        className="w-full rounded border p-3 border-black"
                        />

                        <label className="text-black">Preço</label>
                        <input type="number"
                        value={preco}
                        onChange={(e)=> setPreco(e.target.value)}
                        placeholder="Escreva o preço do produto aqui..."
                        className="w-full rounded border p-3 border-black"
                        />

                        <label className="text-black">Imagem</label>
                        <input type="file"
                        accept="image/*"
                        onChange={selecionarImagem}
                        placeholder=""
                        className="w-full rounded border p-3 border-black"
                        />

                        <button className="w-full bg-green-600 p-3 mt-4 rounded-2xl">
                            Cadastrar lanche
                        </button>
                    </div>

                    {imagem && (
                        <div>
                            <p className="mb-2 font-medium mx-auto text-black justify-center flex">Prévia</p>

                            <Image
                            src={imagem}
                            alt="Prévia da imagem"
                            width={200}
                            height={200}
                            className="mx-auto border-2 border-black rounded"
                            />
                        </div>
                    )}
                </form>
            </div>

        </main>
    )
}