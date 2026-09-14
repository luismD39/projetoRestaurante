"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

interface Produto{
    id: number
    descricao: string
    categoria: string
    preco: number
    imagem: string
}

export default function CardapioPage(){

    const [produtos, setProdutos] = useState<Produto[]>([])
    const [loading, setLoading] = useState(true)

    async function mostrarProdutos() {
        
        try {
            const response = await fetch('http://localhost:3001/produtos')
            const data = await response.json()

            if(!response.ok){
                throw new Error("Erro ao buscar produtos!")
            }

            console.log(data)
            setProdutos(data)
        } catch (error) {
            console.log("Error: ", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        mostrarProdutos()
    }, [])

    return(
        <main className="p-8 bg-amber-50 min-h-screen">
            <h1 className="mb-6 text-3xl font-bold text-black">Cardapio</h1>

            {loading ? (<p>Carregando produtos...</p>) : (
                <div className="grid grid-cols-3 gap-6">
                    {
                        produtos.map((produto)=>(
                            <div key={produto.id}>
                                <Image
                                src={produto.imagem}
                                alt="Imagem do produto"
                                width={400}
                                height={250}
                                className="h-80 w-full rounded-2xl object-cover border-3 border-black"
                                />

                                <h2 className="mt-3 text-xl font-semibold text-black">
                                    {produto.descricao}
                                </h2>

                                <p className="mt-2 text-lg text-green-600">
                                    R$ {produto.preco}
                                </p>

                                <button className="mt-4 w-full h-10 rounded bg-green-500 text-white cursor-pointer hover:bg-green-600">
                                    Fazer pedido
                                </button>
                            </div>
                        ))
                    }
                </div>
            )}

        </main>
    )
}