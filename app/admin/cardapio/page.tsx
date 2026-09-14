"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

interface Produto{
    id: number
    descricao: string
    categoria: string
    preco: number
    imagem: string
}

export default function CardapioAdmin(){

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

    async function deletarProdutos(id:number) {
        const resultado = await Swal.fire({
            title:"Excluir produto?",
            text:"Essa opção não poderá ser desfeita.",
            showCancelButton:true,
            confirmButtonText:"Sim, excluir",
            cancelButtonText:"Cancelar",
            confirmButtonColor:"#dc2626",
            cancelButtonColor:"#6b7280"
        })

        if(!resultado.isConfirmed){
            return
        }
        
        try {
            const response = await fetch(`http://localhost:3001/produtos/${id}`, {
                method:"DELETE"
            })

            if(!response.ok){
                throw new Error("Erro ao excluir produto")
            }
            setProdutos((produtosAtuais)=> produtosAtuais.filter((produtos) => produtos.id !== id))

            await Swal.fire({
                title:"Exluido",
                text:"O produto foi excluido com sucesso.",
                icon:"success",
                confirmButtonText:"Ok"
            })

        } catch (error) {
            console.log(error)

            await Swal.fire({
                title:"Erro",
                text:"Não foi possível excluir o produto.",
                icon:"error",
                confirmButtonText:"Ok"
            })
        }
    }

    useEffect(()=>{
        mostrarProdutos()
    }, [])

    return(
        <main className="p-8 bg-amber-50">
            <h1 className="mb-6 text-3xl font-bold text-black">Gerenciar cardápio</h1>

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
                                    R$ {Number(produto.preco).toFixed(2)}
                                </p>

                                <button className="mt-4 w-full h-10 rounded bg-red-500 text-white cursor-pointer hover:bg-red-600"
                                onClick={()=>deletarProdutos(produto.id)}>
                                    Deletar
                                </button>
                            </div>
                        ))
                    }
                </div>
            )}

        </main>
    )
}